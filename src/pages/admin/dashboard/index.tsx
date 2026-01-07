import useLogin from "@/hooks/useLogin";
import { useEffect } from "react";

const DashboardPage = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isUser, isLoading } = useLogin();

  useEffect(() => {
    isUser();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="italic text-2xl font-semibold">
          <p>Loading ...</p>
        </div>
      ) : (
        <h1>Dashboard Page</h1>
      )}
    </div>
  );
};

export default DashboardPage;
