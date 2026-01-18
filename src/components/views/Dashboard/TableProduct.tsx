import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import useFetch from "@/hooks/useFetch";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

// const products = [
//   {
//     id: 101,
//     name: "Wireless Headphones",
//     category: "Electronics",
//     price: 59.99,
//     rating: 4.5
//   },
//   {
//     id: 102,
//     name: "Yoga Mat",
//     category: "Sports & Fitness",
//     price: 25.0,
//     rating: 4.8
//   },
//   {
//     id: 103,
//     name: "Coffee Maker",
//     category: "Home Appliances",
//     price: 80.0,
//     rating: 4.2
//   },
//   {
//     id: 104,
//     name: "Running Shoes",
//     category: "Sportswear",
//     price: 70.0,
//     rating: 4.6
//   },
//   {
//     id: 105,
//     name: "Smartwatch",
//     category: "Electronics",
//     price: 120.0,
//     rating: 4.7
//   }
// ];

export default function TableProduct() {
  const { getProducts, products, isLoading } = useFetch();
  const BACKEND_URL = "http://localhost:4000";

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="w-full border rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4">ID</TableHead>
            <TableHead>Cover</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price (USD)</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="odd:bg-muted/50">
              <TableCell className="pl-4">{product.id}</TableCell>
              <TableCell className="font-medium">
                <Image
                  src={`${BACKEND_URL}/uploads/${product.cover}`}
                  width={50}
                  height={50}
                  alt={`cover-${product.name}`}
                  className="object-cover rounded-md aspect-square"
                  unoptimized={true}
                />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price.toLocaleString()}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell className="flex gap-1">
                <Button className="cursor-pointer">
                  <SquarePen />
                </Button>
                <Button variant={"destructive"} className="cursor-pointer">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
