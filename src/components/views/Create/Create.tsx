import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/useFetch";

const FormCreate = () => {
  const { form } = useFetch();

  return (
    <div className="pb-20">
      <header>
        <h1 className="text-4xl font-bold">Create New Product</h1>
      </header>

      <Form {...form}>
        <form className="mt-20 space-y-5">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl className="mt-1">
                  <Input {...field} placeholder="Luxe Mist" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Product Description"
                    rows={10}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="price"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g. 1000000" type="number" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="stock"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stock</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g. 100" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="volume"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Volume</FormLabel>
                <FormControl>
                  <Input type="number" {...field} placeholder="e.g. 40" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g. Eau De Parfume"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="cover"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover</FormLabel>
                <FormControl>
                  <Input placeholder="Choose Cover" type="file" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-end items-center gap-5">
            <Button variant={"destructive"} className="w-1/2">
              Cancel
            </Button>
            <Button className="w-1/2">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormCreate;
