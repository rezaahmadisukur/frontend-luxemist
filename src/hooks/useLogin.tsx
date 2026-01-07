import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/index.type";
import AuthService from "@/services/auth.service";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { isAxiosError } from "axios";

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
      if (isAxiosError(error)) {
        toast.error("Username or Password is Wrong", {
          position: "top-center",
          duration: 2000
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isUser = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoading(false);
      router.push("/admin/login");
      return;
    }
    try {
      const user = await AuthService.me();
      setIsLoading(false);
      return user;
    } catch (error) {
      console.error(error);
      router.push("/admin/login");
      localStorage.removeItem("token");
    }
  };

  return { form, handleLogin, isLoading, isUser };
};

export default useLogin;
