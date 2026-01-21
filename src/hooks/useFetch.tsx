import ProductService from "@/services/product.service";
import {
  CreateProductSchema,
  EditProductSchema,
  IProduct
} from "@/types/index.type";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

type FormSchema = z.infer<typeof CreateProductSchema>;

const useFetch = (productId?: string | string[]) => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const isEditMode = !!productId;
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(isEditMode ? EditProductSchema : CreateProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      category: "",
      volume: 0,
      cover: undefined
    }
  });
  const search = searchParams.get("search") || "";

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    const params = { search };

    if (!params) {
      return;
    }
    try {
      const response = await ProductService.findAll({ search: search });
      setProducts(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  const getProduct = async (id: string | string[] | undefined) => {
    try {
      const response = await ProductService.findOne(id);
      setProduct(response);
    } catch (error) {
      console.error(error);
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
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    form.reset();
    router.push("/admin/dashboard");
  };

  const handleUpdate = async (values: z.infer<typeof EditProductSchema>) => {
    if (!productId) {
      console.log("Product not found");
      return;
    }

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
      await ProductService.edit(productId, formData);
      form.reset();
      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Update failed ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await ProductService.delete(id);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getProducts,
    getProduct,
    products,
    product,
    isLoading,
    form,
    handleAddProduct,
    handleUpdate,
    handleCancel,
    handleDelete
  };
};

export default useFetch;
