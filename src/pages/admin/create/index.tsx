import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { AdminLayout } from "@/components/layouts";
import FormCreate from "@/components/views/Admin/Create";

const CreatePage = () => {
  return (
    <ProtectedRoute>
      <AdminLayout title="Luxemist | Create">
        <FormCreate />
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default CreatePage;
