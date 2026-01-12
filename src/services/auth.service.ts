import api from "@/lib/axios/instance";

type LoginData = {
  email?: string;
  password?: string;
};

type Admin = {
  id?: number;
  name?: string;
  email?: string;
};

type AuthResponse = {
  message?: string;
  token: string;
  admin?: Admin;
};

const AuthService = {
  login: async (credentials: LoginData): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("/auth/login", credentials);

    const data = res.data;

    localStorage.setItem("token", data.token);
    localStorage.setItem("admin", JSON.stringify(data.admin));

    return data;
  },

  me: async (): Promise<Admin> => {
    const res = await api.get("/auth/me");
    return res.data.admin;
  },

  getToken: (): string | null => {
    return localStorage.getItem("token");
  }
};

export default AuthService;
