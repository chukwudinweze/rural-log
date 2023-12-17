"use client";

import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/input/Input";
import Select from "@/components/input/Select";
import ProductLists from "@/components/productList/ProductLists";
import Textarea from "@/components/input/textarea";
import useRoutes from "@/hooks/useRoutes";
import { Button } from "@/components/ui/button";

const formSchema = yup.object().shape({
  category: yup.string().required("Category is required"),
  name: yup.string().required("Product name is required").trim(),
  price: yup
    .number()
    .required("Product price is required")
    .positive("Price must be a positive number")
    .min(1, "Price must be at least 1"),
  detail: yup.string().required("Product detail is required"),
});

const UploadProduct = () => {
  const [isCreating, setIsCreating] = useState(false);

  const routes = useRoutes();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      name: "",
      price: 0,
      detail: "",
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left w-full  mt-10 mb-14"
    >
      <div className="mb-10">
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              label="Category"
              {...field}
              options={routes.map((items) => ({
                value: items.category,
                label: items.label,
              }))}
              // disabled={isLoading}
            />
          )}
        />
        <Input
          label="Product name"
          type="text"
          id="name"
          required
          errors={errors}
          register={register}
        />
        <Input
          label="Product price"
          type="text"
          id="price"
          required
          errors={errors}
          register={register}
        />
        <Textarea
          label="Product detail"
          type="detail"
          id="product-detail"
          required
          errors={errors}
          register={register}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-600 mb-20"
      >
        Upload Product
      </Button>
      <ProductLists heading="My products" />
    </form>
  );
};

export default UploadProduct;
