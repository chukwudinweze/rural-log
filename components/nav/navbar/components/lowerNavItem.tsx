// // import Dialogue from "@/components/Dialogue";
// import Input from "@/components/input/Input";
// import { Button } from "@/components/ui/button";
// import validateFarmerInput from "@/lib/farmervalidaion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { useState } from "react";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { Loader2 } from "lucide-react";
// import { usePathname } from "next/navigation";

// interface LowerNavItem {
//   label: string;
//   href: string;
//   active: boolean;
//   flex?: string;
//   triggerDialog?: boolean;
// }
// const LowerNavItem: React.FC<LowerNavItem> = ({
//   active,
//   href,
//   label,
//   flex,
//   triggerDialog,
// }) => {
//   const [open, setOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm<FieldValues>({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       userName: "",
//       password: "",
//       password2: "",
//     },
//     // @ts-expect-error
//     resolver: yupResolver(validateFarmerInput),
//   });

//   const onSubmit: SubmitHandler<FieldValues> = (data) => {
//     setIsLoading(true);

//     axios
//       .post(
//         "https://1189-154-120-112-139.ngrok-free.app/api/v1/agents/create",
//         data
//       )
//       .then(() => {
//         toast.error("Signup Successfull, please check your email");
//         setOpen(false);
//         reset();
//       })
//       .catch(() => toast.error("Something went wrong"))
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   const pathname = usePathname();
//   const isActive =
//     (pathname === "/" && href === "/") ||
//     pathname === href ||
//     pathname?.startsWith(`${href}/`);
//   return (
//     <>
//       {triggerDialog && (
//         <Dialogue
//           open={open}
//           title="Create Account"
//           onChange={() => setOpen(!open)}
//         >
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <Input
//               label="First Name"
//               id="firstName"
//               register={register}
//               errors={errors}
//               required
//               disabled={isLoading}
//             />
//             <Input
//               label="Last Name"
//               id="lastName"
//               register={register}
//               errors={errors}
//               required
//               disabled={isLoading}
//             />
//             <Input
//               type="email"
//               label="Email"
//               id="email"
//               register={register}
//               errors={errors}
//               required
//               disabled={isLoading}
//             />
//             <Input
//               label="Username"
//               id="userName"
//               register={register}
//               errors={errors}
//               required
//               disabled={isLoading}
//             />
//             <Input
//               type="password"
//               label="password"
//               id="password"
//               register={register}
//               errors={errors}
//               required
//               disabled={isLoading}
//             />

//             <Input
//               type="password"
//               label="Confirm Password"
//               id="password2"
//               register={register}
//               errors={errors}
//               required
//               disabled={isLoading}
//             />
//             <div className="py-5">
//               <Button
//                 type="submit"
//                 className="w-full py-3 bg-green-700 text-white hover:bg-green-800"
//               >
//                 {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//                 Submit
//               </Button>
//             </div>
//           </form>
//         </Dialogue>
//       )}
//       <li
//         onClick={() => setOpen(true)}
//         className={cn(
//           " px-1 transition hover:text-white hover:border-redBrand hover:border-b-2 duration-300 py-1",
//           active && "text-yellow-50 border-b-2 border-redBrand "
//         )}
//       >
//         <Link
//           href={href}
//           className={cn("font-bold text-sm md:text-base text-white")}
//         >
//           {label}
//         </Link>
//       </li>
//     </>
//   );
// };

// export default LowerNavItem;
