import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/index.type";
import AuthService from "@/services/auth.service";
import { useState } from "react";
import { useRouter } from "next/router";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email not empty").email("Invalid Email"),
  password: Yup.string()
    .required("Password not empty")
    .min(8, "Min 8 Character")
});
const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: yupResolver(LoginSchema)
  });

  const handleLogin = async (data: ILogin) => {
    setIsLoading(true);
    try {
      await AuthService.login(data);
      window.location.href = "/admin/dashboard";
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const isUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const user = await AuthService.me();
        console.log(user);
        return user;
      } catch (error) {
        console.error(error);
      }
    } else {
      router.push("/admin/login");
    }
  };

  return { form, handleLogin, isLoading, isUser };
};

export default useLogin;
