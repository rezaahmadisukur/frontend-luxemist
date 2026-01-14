import { Button } from "@/components/ui/button";
import TableProduct from "./TableProduct";
import { Plus, Search } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import useFetch from "@/hooks/useFetch";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const { form } = useFetch();
  return (
    <div>
      <header>
        <h1 className="text-4xl font-bold">List Product</h1>
      </header>

      <div className="flex justify-between items-center mt-10">
        <Form {...form}>
          <form className="flex items-center gap-5 w-1/2">
            <FormField
              name="search"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Search Product"
                      className="w-full"
                      type="search"
                      id="search"
                      autoComplete="off"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="cursor-pointer">
              <Search />
            </Button>
          </form>
        </Form>

        <Button className="cursor-pointer">
          <Plus /> Add Product
        </Button>
      </div>

      <div className="mt-10">
        <TableProduct />
      </div>
    </div>
  );
};

export default Dashboard;
