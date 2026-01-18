import AuthService from "@/services/auth.service";
import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react";

interface Admin {
  id?: number;
  name?: string;
  email?: string;
}

interface AuthContextType {
  admin?: Admin | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  adminLogin: (email: string, password: string) => Promise<void>;
  // logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    // setIsLoading(true);
    try {
      const token = AuthService.getToken();
      if (!token) {
        setAdmin(null);
        setIsLoading(false);
        return;
      }

      // Verify token to backend
      const adminData = await AuthService.me();
      setAdmin(adminData);
    } catch (error) {
      console.error("Auth check failed", error);
      localStorage.removeItem("token");
      localStorage.removeItem("admin");
      setAdmin(null);

      if (router.pathname !== "/admin/login") {
        router.push("/admin/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const adminLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await AuthService.login({ email, password });
      setAdmin(res.admin as Admin);
    } catch (error) {
      console.log("AuthContext.tsx adminLogin", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const adminLogout = async () => {
  //   setIsLoading(true);
  //   try {
  //     await AuthService.logout();
  //     setAdmin(null);
  //     router.push("/admin/login");
  //   } catch (error) {
  //     console.error("AuthContext.tsx adminLogout", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const AuthValue = {
    admin,
    isLoading,
    isAuthenticated: !!admin,
    adminLogin,
    // adminLogout,
    checkAuth
  };

  return (
    <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used in AuthProvider");
  }

  return context;
}
