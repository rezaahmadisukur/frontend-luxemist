import { Button } from "@/components/ui/button";
import TableProduct from "./TableProduct";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <header>
        <h1 className="text-4xl font-bold">List Product</h1>
      </header>

      <div className="flex justify-between items-center mt-10">
        <div className="flex gap-3 w-1/2">
          <Input
            placeholder="Search Product"
            className="w-full"
            type="search"
            id="search"
            autoComplete="off"
          />
          <Button className="cursor-pointer">
            <Search />
          </Button>
        </div>

        <Button className="cursor-pointer">
          <Link href="/admin/create" className="flex gap-3 items-center">
            <Plus /> Add Product
          </Link>
        </Button>
      </div>

      <div className="mt-10">
        <TableProduct />
      </div>
    </div>
  );
};

export default Dashboard;
