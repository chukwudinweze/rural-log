"use client";

import Input from "@/components/input/Input";
import Select from "@/components/input/Select";
import useStates from "@/hooks/useStates";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const states = useStates();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      state: "",
      lag: "",
    },
  });

  const selectedState = watch("state");
  const selectedLGA = watch("lga");

  console.log(selectedState);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
  };
  return (
    <div>
      <Input
        label="First Name"
        id="name"
        register={register}
        errors={errors}
        required
        disabled={isLoading}
      />
      <Input
        label="Last Name"
        id="lastname"
        register={register}
        errors={errors}
        required
        disabled={isLoading}
      />
      <Select
        disabled={isLoading}
        label="State"
        options={states.map((state) => ({
          value: state.state,
          label: state.state,
        }))}
        onChange={(value) =>
          setValue("state", value, {
            shouldValidate: true,
          })
        }
        value={selectedState}
      />
      <Select
        disabled={isLoading || !selectedState}
        label="LGA"
        options={
          states
            .find((state) => state.state === selectedState.value)
            ?.lgas.map((lga) => ({
              value: lga,
              label: lga,
            })) || []
        }
        onChange={(value) =>
          setValue("lga", value, {
            shouldValidate: true,
          })
        }
        value={selectedLGA}
      />
      <Input
        label="Address"
        id="address"
        register={register}
        errors={errors}
        required
        disabled={isLoading}
      />
      <Input
        label="Phone Number"
        id="phoneNumber"
        register={register}
        errors={errors}
        required
        disabled={isLoading}
      />
      <Input
        label="Other Phone Number"
        id="otherPhoneNumber"
        register={register}
        errors={errors}
        required
        disabled={isLoading}
      />
      <Input
        label="Email Address"
        id="email"
        register={register}
        errors={errors}
        required
        disabled={isLoading}
      />
    </div>
  );
};

export default CheckoutPage;
