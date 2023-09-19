"use client";

import Input from "@/components/input/Input";
import Select from "@/components/input/Select";
import { products } from "@/components/productList/ProductLists";
import useStates from "@/hooks/useStates";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Productlists from "./components/productlists";

const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);

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

  //   get Nigeria state
  const states = useStates();

  //    get product from the store
  const products = useAppSelector((state) => state.productCheckout.products);

  if (products.length < 1) {
    return <p>No Product Selected</p>;
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (products.length < 1) {
      return;
    }
    // console.log(data);
  };
  return (
    <div className="py-5">
      <h1 className="font-bold text-lg">Billing Details</h1>
      <div className="flex flex-col-reverse gap-4 md:flex-row">
        <div className="flex-1 ">
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
        <Productlists />
      </div>
    </div>
  );
};

export default CheckoutPage;
