import ProtectedRoute from "@/components/auth/ProtectedRoute";

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard Page</h1>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
