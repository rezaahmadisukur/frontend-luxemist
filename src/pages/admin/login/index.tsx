"use-client";

import { AuthAdminLayout } from "@/components/layouts";
import Login from "@/components/views/Login";

const LoginPage = () => {
  return (
    <AuthAdminLayout title="LuxeMist | Login">
      <Login />
    </AuthAdminLayout>
  );
};

export default LoginPage;
