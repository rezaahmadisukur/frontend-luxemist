import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { AdminLayout } from "@/components/layouts";
import FormEdit from "@/components/views/Admin/Edit";
import { useRouter } from "next/router";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ProtectedRoute>
      <AdminLayout title="Luxemist | Edit">
        <FormEdit id={id} />
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default EditPage;
