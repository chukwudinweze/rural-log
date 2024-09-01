"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "@/components/input/Input";
import useStates from "@/hooks/useStates";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Required")
    .min(2, "Last name must be at least 2 characters"),
  email: yup
    .string()
    .required("Required")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Password must be at least 6 characters"),
});

const AgroInputDealerSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [isFormLoadError, setIsFormLoadError] = useState(false);
  const router = useRouter();

  //   get Nigeria state
  const states = useStates();

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    getValues,
    reset,
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    //@ts-expect-error
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    axios
      .post(
        "https://1189-154-120-112-139.ngrok-free.app/api/v1/agents/create",
        data
      )
      .then(() => {
        toast.success("Successfully submitted, We will contact you shortly");
        reset();
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-white p-10 mx-auto mt-10 max-w-4xl border rounded-lg shadow-md">
      <h1 className="text-4xl font-semibold text-green-800 mb-5">
        Agro Input Dealer Setup
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="First Name"
            id="firstName"
            register={register}
            errors={errors}
            required
            isFormLoadError={isFormLoadError}
          />

          <Input
            label="Last Name"
            id="lastName"
            register={register}
            errors={errors}
            required
            isFormLoadError={isFormLoadError}
          />

          <Input
            label="Email"
            id="email"
            register={register}
            errors={errors}
            required
            isFormLoadError={isFormLoadError}
          />
          <Input
            type="password"
            label="Password"
            id="password"
            required
            register={register}
            errors={errors}
          />
        </div>
        <div className="mt-6">
          <Button
            type="submit"
            className="w-full py-3 bg-green-700 text-white hover:bg-green-800 mb-10 mt-5"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AgroInputDealerSignup;
