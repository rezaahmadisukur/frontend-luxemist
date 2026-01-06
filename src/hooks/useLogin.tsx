import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/index.type";
import axios from "axios";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email not empty").email("Invalid Email"),
  password: Yup.string()
    .required("Password not empty")
    .min(8, "Min 8 Character")
});
const useLogin = () => {
  const form = useForm({
    resolver: yupResolver(LoginSchema)
  });

  const handleLogin = (data: ILogin) => {
    console.log(data);
  };

  return { form, handleLogin };
};

export default useLogin;
