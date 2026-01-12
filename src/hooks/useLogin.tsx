import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/index.type";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import { useAuth } from "@/contexts/AuthContext";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email not empty").email("Invalid Email"),
  password: Yup.string()
    .required("Password not empty")
    .min(8, "Min 8 Character")
});
const useLogin = () => {
  const { adminLogin } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: yupResolver(LoginSchema)
  });

  const handleLogin = async (data: ILogin) => {
    setIsLoading(true);
    const { email, password } = data;
    try {
      await adminLogin(email, password);
      router.push("/admin/dashboard");
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

  return { form, handleLogin, isLoading };
};

export default useLogin;
