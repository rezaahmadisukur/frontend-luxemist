import api from "@/lib/axios/instance";

type TData = {
  email?: string;
  password?: string;
};
const AuthService = {
  login: async (data: TData) => {
    const res = await api.post("/auth/login", data);

    if (res.data.access_token) {
      localStorage.setItem("token", res.data.access_token);
    }

    return res.data;
  },

  me: async () => {
    const res = await api.get("/auth/me");
    return res.data;
  }
};

export default AuthService;
