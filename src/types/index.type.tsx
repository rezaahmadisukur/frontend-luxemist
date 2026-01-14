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
  image: string;
  category: string;
  valume: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  authorId: number;
}
