"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  comments: string;
}

const FeedbackForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Quick Feedback</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone no
          </label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Comments
          </label>
          <textarea
            {...register("comments", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-800 focus:border-green-800 sm:text-sm"
            rows={5}
          ></textarea>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-green-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
