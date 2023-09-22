import * as yup from "yup";

const billingDetailsSchema = yup.object().shape({
  name: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  //   state: yup.string().required("State is required"),
  //   lga: yup.string().required("LGA is required"),
  address: yup.string().required("Address is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d{11}$/, "Phone Number must be 11 digits"),
  otherPhoneNumber: yup
    .string()
    .matches(/^\d{11}$/, "Other Phone Number must be 11 digits"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email Address is required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

export default billingDetailsSchema;
