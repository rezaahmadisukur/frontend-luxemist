import api from "@/lib/axios/instance";
import { IProduct } from "@/types/index.type";

const ProductService = {
  findAll: async (): Promise<IProduct[]> => {
    const res = await api.get<IProduct[]>(`/product`);
    return res.data;
  }
};

export default ProductService;
