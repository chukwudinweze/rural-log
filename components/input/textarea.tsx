import { cn } from "@/lib/utils";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps {
  id: string;
  label?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  isFormLoadError?: boolean;
}

const Textarea = ({
  errors,
  label,
  register,
  disabled,
  required,
  type,
  id,
  isFormLoadError,
}: TextareaProps) => {
  return (
    <div className="mt-8">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-green-700"
        >
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "pt-4 form-input block w-full h-80 rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3",
          errors[id] && "focus:ring-red-500",
          disabled && "opacity-50"
        )}
        placeholder={label}
        {...register(id, { required })}
        disabled={disabled}
      ></textarea>
      <p>
        {errors[id] && (
          <p className="text-red-500 text-xs mt-1">
            {errors[id]?.message?.toString()}
          </p>
        )}
        {isFormLoadError && (
          <div className="text-red-500 text-xs mt-1">
            Error loading First Name
          </div>
        )}
      </p>
    </div>
  );
};

export default Textarea;
