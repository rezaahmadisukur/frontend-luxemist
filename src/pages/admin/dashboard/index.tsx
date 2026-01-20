import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { AdminLayout } from "@/components/layouts";
import Dashboard from "@/components/views/Admin/Dashboard";

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <AdminLayout title="Luxemist | Dashboard">
        <Dashboard />
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default DashboardPage;
