"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "@/components/input/Input";
import Select from "@/components/input/Select";
import useStates from "@/hooks/useStates";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import agentRegSchema from "@/lib/agentRegSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@/lib/utils";

const AgentRegistration = () => {
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
      username: "",
      email: "",
      state: "",
      lga: "",
      age: "",
      gender: "",
      homeAddress: "",
      IsBusinessRegistered: "",
      businessName: "",
      businessAddress: "",
      YearsOfExperince: "",
      phoneNumber: "",
      otherPhoneNumber: "",
      bvn: "",
      serviceLevelAgreement: false,
    },
    //@ts-expect-error
    resolver: yupResolver(agentRegSchema),
  });

  const selectedState = watch("state");

  const fetchData = useCallback(() => {
    axios
      // https://1189-154-120-112-139.ngrok-free.app/api/v1/agents/agent/11
      .get(" https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        const data = response.data;
        setValue("firstName", data?.title);
        setValue("lastName", data?.title);
        setValue("email", data?.title);
        setValue("username", data?.title);
      })
      .catch((error) => {
        {
          setIsFormLoadError(true);
          setValue("firstname", "");
          setValue("lastname", "");
          setValue("email", "");
          setValue("username", "");
        }
      })
      .finally(() => setIsLoadingForm(false));
  }, [setValue]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const selectedStateValue = selectedState ? selectedState.value : "";
    const selectedLgaValue = data.lga ? data.lga.value : "";
    const selectedGender = data.gender ? data.gender.value : "";

    const modifiedData = {
      ...data,
      state: selectedStateValue,
      lga: selectedLgaValue,
      gender: selectedGender,
    };

    console.log(modifiedData);

    axios
      .put(
        "https://1189-154-120-112-139.ngrok-free.app/api/v1/agents/create",
        modifiedData
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
        Agent Setup
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="First Name"
            id="firstName"
            register={register}
            errors={errors}
            required
            disabled={true}
            isFormLoadError={isFormLoadError}
          />

          <Input
            label="Last Name"
            id="lastName"
            register={register}
            errors={errors}
            required
            disabled={true}
            isFormLoadError={isFormLoadError}
          />

          <Input
            label="Username"
            id="username"
            register={register}
            errors={errors}
            required
            disabled={true}
            isFormLoadError={isFormLoadError}
          />

          <Input
            label="Email"
            id="email"
            register={register}
            errors={errors}
            required
            disabled={true}
            isFormLoadError={isFormLoadError}
          />

          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select
                isRequired
                errors={errors}
                label="Gender"
                {...field}
                options={["Male", "Female"].map((gender) => ({
                  value: gender,
                  label: gender,
                }))}
                disabled={isLoading}
              />
            )}
          />
          <Input
            type="number"
            label="Age"
            id="age"
            required
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            label="businessName"
            id="businessName"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select
                isRequired
                label="State"
                {...field}
                options={states.map((state) => ({
                  value: state.state,
                  label: state.state,
                }))}
                disabled={isLoading}
              />
            )}
          />
          <Controller
            name="lga"
            control={control}
            render={({ field }) => (
              <Select
                isRequired
                label="Local Gvt"
                {...field}
                options={
                  states
                    .find((state) => state.state === selectedState?.value)
                    ?.lgas.map((lga) => ({
                      value: lga,
                      label: lga,
                    })) || []
                }
                disabled={isLoading}
              />
            )}
          />
          <Controller
            name="IsBusinessRegistered"
            control={control}
            render={({ field }) => (
              <Select
                isRequired
                label="Is your Business registered"
                {...field}
                options={["Yes", "No"].map((registered) => ({
                  value: registered,
                  label: registered,
                }))}
                disabled={isLoading}
              />
            )}
          />
          <Input
            label="Business Address"
            id="businessAddress"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
          <Input
            label="Home Address"
            id="homeAddress"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
          <Input
            type="number"
            label="Bvn"
            id="bvn"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
          <Input
            type="tel"
            label="Phone Number"
            id="phoneNumber"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
          <Input
            type="tel"
            label="Other Phone Number"
            id="otherPhoneNumber"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />

          <Controller
            name="YearsOfExperince"
            control={control}
            render={({ field }) => (
              <Select
                isRequired
                label="Years of Customer Experience"
                {...field}
                options={[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10 and above",
                ].map((experince) => ({
                  value: experince,
                  label: experince,
                }))}
                disabled={isLoading}
              />
            )}
          />
        </div>
        <div className="mt-4 flex items-center overflow-hidden ">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreement"
              {...register("agreement")}
              disabled={isLoading}
              required
              className={cn(
                " h-5 w-5 border rounded-md focus:outline-none text-white transition duration-0 checked:bg-green-700",
                errors["agreement"] && "border-red-500 focus:ring-red-500"
              )}
            />
          </div>
          <span className="block ml-2 text-sm font-medium text-gray-700">
            Service Level Agreement
          </span>
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

export default AgentRegistration;
