import ProductService from "@/services/product.service";
import { CreateProductSchema, IProduct } from "@/types/index.type";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

type FormSchema = z.infer<typeof CreateProductSchema>;

const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      category: "",
      volume: 0
    }
  });

  const getProducts = async () => {
    try {
      const response = await ProductService.findAll();
      setProducts(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProduct = async (values: FormSchema) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", String(values.price));
    formData.append("stock", String(values.stock));
    formData.append("category", values.category);
    formData.append("volume", String(values.volume));

    if (values.cover) {
      formData.append("cover", values.cover);
    }

    setIsLoading(true);
    try {
      await ProductService.create(formData);
      form.reset();
      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(true);
    }
  };

  const handleCancel = () => {
    form.reset();
    router.push("/admin/dashboard");
  };

  return {
    getProducts,
    products,
    isLoading,
    form,
    handleAddProduct,
    handleCancel
  };
};

export default useFetch;
