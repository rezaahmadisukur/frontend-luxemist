import useFetch from "@/hooks/useFetch";
import { IProduct } from "@/types/index.type";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Products = () => {
  const { products, getProducts } = useFetch();
  const BACKEND_URL = "http://localhost:4000";

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // console.log(products);

  return (
    <div className="min-h-screen max-w-5xl 5xl:container mx-auto py-20">
      <div className="flex gap-5 w-full">
        {/* Filter */}
        <div className="w-3/12 border min-h-screen">
          <div className="border">
            <h1 className="text-3xl font-bold">Filter</h1>

            <form action=""></form>
          </div>
        </div>
        {/* Products */}
        <div className="w-9/12">
          <h1 className="text-3xl font-bold">List Products</h1>

          <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
            {products.length > 0 &&
              products.map((product: IProduct) => (
                <div key={product.id} className="container overflow-hidden">
                  <div className="group overflow-hidden rounded-2xl">
                    <Image
                      src={`${BACKEND_URL}/uploads/${product.cover}`}
                      alt="Cover Product"
                      width={200}
                      height={200}
                      unoptimized={true}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="mt-3 space-y-3">
                    <h4 className="text-sm font-semibold text-neutral-500">
                      {product.category}
                    </h4>
                    <Link href="" className="group">
                      <h1 className="font-semibold text-lg group-hover:underline transition-all duration-300">
                        {product.name}
                      </h1>
                    </Link>
                    <p className="text-primary font-normal">${product.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
