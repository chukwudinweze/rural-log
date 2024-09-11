"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "@/components/input/Input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

// Mock Data for States and LGAs
const statesAndLGAs = {
  Lagos: ["Ikeja", "Surulere", "Yaba", "Epe"],
  Abuja: ["Gwagwalada", "Kuje", "Abaji", "Bwari"],
  Kaduna: ["Chikun", "Igabi", "Jaba", "Zaria"],
  Kano: ["Dala", "Fagge", "Gwale", "Tarauni"],
};

// Mock Data for Languages
const languages = [
  { value: "English", label: "English" },
  { value: "Hausa", label: "Hausa" },
  { value: "Yoruba", label: "Yoruba" },
  { value: "Igbo", label: "Igbo" },
];

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
  const [selectedState, setSelectedState] = useState("");
  const [lgOptions, setLgOptions] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
    watch,
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

  // Watch the selected state and update LGAs
  useEffect(() => {
    if (selectedState) {
      //@ts-expect-error
      setLgOptions(statesAndLGAs[selectedState] || []);
    } else {
      setLgOptions([]);
    }
  }, [selectedState]);

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

          {/* State Dropdown */}
          <div>
            <label
              htmlFor="state"
              className="text-green-700 block text-sm font-medium"
            >
              State
            </label>
            <select
              id="state"
              {...register("state")}
              className="form-input block w-full rounded-md border-0 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3"
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select State</option>
              {Object.keys(statesAndLGAs).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-xs mt-1">
                {errors.state?.message?.toString()}
              </p>
            )}
          </div>

          {/* LGA Dropdown */}
          <div>
            <label
              htmlFor="lg"
              className="text-green-700 block text-sm font-medium"
            >
              Local Government (LGA)
            </label>
            <select
              id="lg"
              {...register("lg")}
              className="form-input block w-full rounded-md border-0 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3"
              disabled={!selectedState}
            >
              <option value="">Select LGA</option>
              {lgOptions.map((lg) => (
                <option key={lg} value={lg}>
                  {lg}
                </option>
              ))}
            </select>
            {errors.lg && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lg?.message?.toString()}
              </p>
            )}
          </div>

          <Input
            label="Age"
            id="age"
            register={register}
            errors={errors}
            required
          />

          {/* Multi-select for Languages */}
          <div>
            <label
              htmlFor="languages"
              className="text-green-700 block text-sm font-medium"
            >
              Language(s)
            </label>
            <Select
              isMulti
              options={languages}
              value={languages.filter((lang) =>
                //@ts-expect-error
                selectedLanguages.includes(lang.value)
              )}
              onChange={(selected) =>
                //@ts-expect-error
                setSelectedLanguages(selected.map((lang) => lang.value))
              }
              className="basic-multi-select"
              classNamePrefix="select"
              name="languages"
            />
            {errors.languages && (
              <p className="text-red-500 text-xs mt-1">
                {errors.languages?.message?.toString()}
              </p>
            )}
          </div>

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
            label="Facebook Profile (optional)"
            id="facebookProfile"
            register={register}
            errors={errors}
            required
          />

          {/* Input Type Dropdown */}
          <div>
            <label
              htmlFor="inputType"
              className="text-green-700 block text-sm font-medium"
            >
              Input Type
            </label>
            <select
              id="inputType"
              {...register("inputType")}
              className="form-input block w-full rounded-md border-0 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3"
            >
              <option value="">Select Input Type</option>
              <option value="Fertilizer">Fertilizer</option>
              <option value="Seeds">Seeds</option>
            </select>
            {errors.inputType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.inputType?.message?.toString()}
              </p>
            )}
          </div>

          {/* Fertilizer Type Dropdown */}
          <div>
            <label
              htmlFor="fertilizerType"
              className="text-green-700 block text-sm font-medium"
            >
              Fertilizer Type
            </label>
            <select
              id="fertilizerType"
              {...register("fertilizerType")}
              className="form-input block w-full rounded-md border-0 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3"
            >
              <option value="">Select Fertilizer Type</option>
              <option value="NPK 20-10-10">NPK 20-10-10</option>
              <option value="NPK 15-15-15">NPK 15-15-15</option>
            </select>
            {errors.fertilizerType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fertilizerType?.message?.toString()}
              </p>
            )}
          </div>

          {/* Seed Type Dropdown */}
          <div>
            <label
              htmlFor="seedType"
              className="text-green-700 block text-sm font-medium"
            >
              Seed Type
            </label>
            <select
              id="seedType"
              {...register("seedType")}
              className="form-input block w-full rounded-md border-0 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3"
            >
              <option value="">Select Seed Type</option>
              <option value="Rice">Rice</option>
              <option value="Maize">Maize</option>
            </select>
            {errors.seedType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.seedType?.message?.toString()}
              </p>
            )}
          </div>

          <Input
            label="BVN"
            id="bvn"
            register={register}
            errors={errors}
            required
          />

          <div className="sm:col-span-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register("agreement")}
                className="form-checkbox"
              />
              <span className="ml-2 text-gray-700">
                I agree to the commission fee
              </span>
            </label>
            {errors.agreement && (
              <p className="text-red-500 text-xs mt-1">
                {errors.agreement?.message?.toString()}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Button
            type="submit"
            disabled={isLoading}
            className="relative flex items-center justify-center w-full max-w-sm py-2 text-white bg-green-700 rounded-lg hover:bg-green-600"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AgroInputDealerSignupInfo;
