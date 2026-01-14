import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { AdminLayout } from "@/components/layouts";
import Dashboard from "@/components/views/Dashboard";

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default DashboardPage;
