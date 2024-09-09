"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "@/components/input/Input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object().shape({
  firstName: yup.string().required("Required").min(2, "Invalid Firstname"),
  lastName: yup.string().required("Required").min(2, "Invalid lastname"),
  email: yup.string().required("Required").email("Invalid email address"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Password must be at least 6 characters"),
  state: yup.string().required("Required"),
  lg: yup.string().required("Required"),
  age: yup
    .number()
    .typeError("Please enter a valid number for age")
    .required("Required"),
  languages: yup.array().of(yup.string()).required("Required"),
  homeAddress: yup.string().required("Required"),
  businessName: yup.string().required("Required"),
  businessAddress: yup.string().required("Required"),
  yearsInBusiness: yup
    .number()
    .typeError("Invalid years in business")
    .required("Required"),
  phoneNumber: yup.string().required("Required"),
  alternativePhoneNumber: yup.string().required("Required"),
  facebookProfile: yup.string().url("Invalid URL").required("Required"),
  inputType: yup.string().required("Required"),
  fertilizerType: yup.string().when("inputType", {
    is: "Fertilizer",
    then: yup.string().required("Please select a fertilizer type"),
    otherwise: yup.string().nullable(),
  }),
  seedType: yup.string().when("inputType", {
    is: "Seeds",
    then: yup.string().required("Please select a seed type"),
    otherwise: yup.string().nullable(),
  }),
  bvn: yup.string().required("Required"),
  agreement: yup
    .boolean()
    .oneOf([true], "You must agree to the commission fee"),
});

const AgroInputDealerSignupInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
      state: "",
      lg: "",
      age: "",
      languages: [],
      homeAddress: "",
      businessName: "",
      businessAddress: "",
      yearsInBusiness: "",
      phoneNumber: "",
      alternativePhoneNumber: "",
      facebookProfile: "",
      inputType: "",
      fertilizerType: "",
      seedType: "",
      bvn: "",
      agreement: false,
    },
    //@ts-expect-error
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    axios
      .post("https://your-api-url/api/v1/agents/create", data)
      .then(() => {
        toast.success("Successfully submitted, We will contact you shortly");
        reset();
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const inputType = watch("inputType");

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
          />
          <Input
            label="Last Name"
            id="lastName"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Email"
            id="email"
            register={register}
            errors={errors}
            required
          />
          <Input
            type="password"
            label="Password"
            id="password"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="State"
            id="state"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="LG"
            id="lg"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Age"
            id="age"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Language(s)"
            id="languages"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Home Address"
            id="homeAddress"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Business Name (Incorporated)"
            id="businessName"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Business Address"
            id="businessAddress"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="How many years in business?"
            id="yearsInBusiness"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Phone Number"
            id="phoneNumber"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Alternative Phone Number"
            id="alternativePhoneNumber"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Facebook Profile"
            id="facebookProfile"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="What type of input do you supply?"
            id="inputType"
            register={register}
            errors={errors}
            required
          />
          {inputType === "Fertilizer" && (
            <Input
              label="If Fertilizer, what type?"
              id="fertilizerType"
              register={register}
              errors={errors}
              required
            />
          )}
          {inputType === "Seeds" && (
            <Input
              label="If Seed, what type?"
              id="seedType"
              register={register}
              errors={errors}
              required
            />
          )}
          <Input
            label="BVN No"
            id="bvn"
            register={register}
            errors={errors}
            required
          />
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-green-700">
              A commission fee of 5% will be charged per transaction for service
              delivered. Do you agree?
            </label>
            <input type="checkbox" id="agreement" {...register("agreement")} />
            {errors.agreement && (
              <p className="text-red-500 text-xs mt-1">
                {errors.agreement?.message?.toString()}
              </p>
            )}
          </div>
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

export default AgroInputDealerSignupInfo;
