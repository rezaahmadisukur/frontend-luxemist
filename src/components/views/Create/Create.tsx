import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/useFetch";

const FormCreate = () => {
  const { form, handleAddProduct } = useFetch();

  return (
    <div className="w-full h-auto p-10 bg-background my-10 shadow-lg">
      <header>
        <h1 className="text-4xl font-bold">Create New Product</h1>
      </header>

      <Form {...form}>
        <form
          className="mt-20 space-y-5"
          onSubmit={form.handleSubmit(handleAddProduct)}
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl className="mt-1">
                  <Input
                    {...field}
                    placeholder="Luxe Mist"
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
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
                <FormMessage />
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
                  <Input
                    {...field}
                    placeholder="e.g. 1000000"
                    type="number"
                    value={field.value as string | number}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
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
                  <Input
                    {...field}
                    placeholder="e.g. 100"
                    type="number"
                    value={field.value as string | number}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
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
                  <Input
                    type="number"
                    {...field}
                    placeholder="e.g. 40"
                    value={field.value as string | number}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="cover"
            control={form.control}
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Cover</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Choose Cover"
                    type="file"
                    {...fieldProps}
                    onChange={(event) => {
                      const file = event.target.files && event.target.files[0];
                      onChange(file);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end items-center gap-5">
            <Button variant={"destructive"} className="w-1/3">
              Cancel
            </Button>
            <Button className="w-1/3">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormCreate;
