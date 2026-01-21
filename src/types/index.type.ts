import z from "zod";

export interface ILogin {
  email: string;
  password: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  cover: string;
  category: string;
  volume: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  authorId: number;
}

export const CreateProductSchema = z.object({
  name: z.string().min(1, { message: "Product Name is Required" }),
  description: z.string().min(1, { message: "Description Name is Required" }),
  price: z.coerce.number().min(0.1, { message: "Price is Required" }),
  stock: z.coerce.number().min(1, { message: "Stock is Required" }),
  category: z.string().min(1, { message: "Category is Required" }),
  volume: z.coerce.number().min(1, { message: "Volume is Required" }),
  cover: z.instanceof(File, { message: "Cover Image is Required" })
});

export const EditProductSchema = z.object({
  name: z.string().min(1, { message: "Product Name is Required" }),
  description: z.string().min(1, { message: "Description Name is Required" }),
  price: z.coerce.number().min(0.1, { message: "Price is Required" }),
  stock: z.coerce.number().min(1, { message: "Stock is Required" }),
  category: z.string().min(1, { message: "Category is Required" }),
  volume: z.coerce.number().min(1, { message: "Volume is Required" }),
  cover: z.any().optional()
});
