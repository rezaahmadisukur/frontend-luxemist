import ProductService from "@/services/product.service";
import { IProduct } from "@/types/index.type";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const form = useForm();

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await ProductService.findAll();
      setProducts(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getProducts, products, isLoading, form };
};

export default useFetch;
