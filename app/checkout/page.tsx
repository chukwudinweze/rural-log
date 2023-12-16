"use client";

import Input from "@/components/input/Input";
import Select from "@/components/input/Select";
import useStates from "@/hooks/useStates";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Productlists from "./components/productlists";
import toast from "react-hot-toast";
import { clearProductCheckout } from "@/store/productCheckout";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import billingDetailsSchema from "@/lib/billingDetailsSchema";
import axios from "axios";
import { Loader2 } from "lucide-react";

type stateType = {
  value: string;
  label: string;
};
const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  //    get product from the store
  const products = useAppSelector((state) => state.productCheckout.products);

  //   get Nigeria state
  const states = useStates();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    reset,

    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      state: "",
      lga: "",
      products,
    },
    // @ts-expect-error
    resolver: yupResolver(billingDetailsSchema),
  });

  const selectedState = watch("state");

  useEffect(() => {}, [watch]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (products.length < 1) {
      return;
    }
    setIsLoading(true);

    const selectedStateValue = selectedState ? selectedState.value : "";
    const selectedLgaValue = data.lga ? data.lga.value : "";

    const modifiedData = {
      ...data,
      state: selectedStateValue,
      lga: selectedLgaValue,
    };

    // setIsLoading(true);
    console.log(data);
    console.log("modified", modifiedData);

    axios
      .post(
        "https://e576-197-242-115-128.ngrok-free.app/api/v1/products/create",
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

    // dispatch(clearProductCheckout());
  };

  if (products.length < 1) {
    return <p>No Product Selected</p>;
  }

  return (
    <div className="py-5">
      <h1 className="font-bold text-lg">Billing Details</h1>
      <div className="flex flex-col-reverse gap-4 md:flex-row">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 ">
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
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select
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
                disabled={isLoading || !selectedState}
              />
            )}
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
            type="tel"
            label="Phone Number"
            id="phoneNumber"
            register={register}
            errors={errors}
            required
            disabled={isLoading}
          />
          <Input
            type="tel"
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
          <div className="flex gap-2 mt-4">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              required
              className="accent-green-700 hover:accent-green-600"
            />
            <p className="text-xs ">
              I have read and agree to the terms and conditions
            </p>
          </div>
          <Button
            type="submit"
            className="w-full py-3 bg-green-700 text-white hover:bg-green-800 mb-10 mt-5"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </form>

        <Productlists />
      </div>
    </div>
  );
};

export default CheckoutPage;
