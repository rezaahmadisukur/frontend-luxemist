import api from "@/lib/axios/instance";
import { IProduct } from "@/types/index.type";

const ProductService = {
  findAll: async (): Promise<IProduct[]> => {
    const res = await api.get<IProduct[]>(`/product`);
    return res.data;
  },

  findOne: async (id: string | string[] | undefined) => {
    const res = await api.get<IProduct>(`/product/${id}`);
    return res.data;
  },

  create: async (data: FormData) => {
    await api.post("/product", data);
  },

  edit: async (id: string | string[], data: FormData) => {
    await api.patch(`/product/${id}`, data);
  },

  delete: async (id: number) => {
    await api.delete(`/product/${id}`);
  }
};

export default ProductService;
