import * as Yup from "yup";

const validateFarmerInput = Yup.object()
  .shape({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    userName: Yup.string()
      .required("Username is required")
      .min(5, "Username must be at least 5 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    password2: Yup.string()
      .required("Passwords did not match")
      .oneOf([Yup.ref("password")], "Password must match"),
  })
  .required();

export default validateFarmerInput;
