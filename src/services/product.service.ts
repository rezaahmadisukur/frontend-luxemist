import api from "@/lib/axios/instance";
import { IProduct } from "@/types/index.type";

interface IFilters {
  search?: string;
}

const ProductService = {
  findAll: async (filters: IFilters): Promise<IProduct[]> => {
    const params: IFilters = {};

    if (filters.search) params.search = filters.search;

    console.log(params);

    const res = await api.get<IProduct[]>(`/product`, {
      params: params
    });
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
