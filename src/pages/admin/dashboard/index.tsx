import useLogin from "@/hooks/useLogin";
import { useEffect } from "react";

const DashboardPage = () => {
  const { isUser } = useLogin();

  useEffect(() => {
    isUser();
  }, [isUser]);

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
