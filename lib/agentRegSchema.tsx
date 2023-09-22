import * as yup from "yup";

const agentRegSchema = yup.object().shape({
  age: yup.string().required("required"),
  businessName: yup.string().required("required"),
  businessAddress: yup.string().required("required"),
  homeAddress: yup.string().required("required"),
  bvn: yup
    .string()
    .required("required")
    .test("valid-bvn", "BVN must be exactly 10 digits", (val) => {
      if (!val) return true; // Allow empty values
      const numericValue = parseInt(val, 10); // Convert the value to a number
      if (isNaN(numericValue) || val.length !== 11) {
        return false; // Validation failed
      }
      return true; // Validation passed
    }),
  phoneNumber: yup
    .string()
    .required("required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
});

export default agentRegSchema;
