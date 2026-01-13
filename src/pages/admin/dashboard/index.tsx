import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { AdminLayout } from "@/components/layouts";

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <h1>Dashboard Page</h1>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default DashboardPage;
