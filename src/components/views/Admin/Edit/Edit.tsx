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
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import { useEffect } from "react";

interface IProps {
  id: string | string[] | undefined;
}

const FormEdit = ({ id }: IProps) => {
  const { form, handleUpdate, isLoading, handleCancel, getProduct, product } =
    useFetch(id);

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      form.reset({
        name: product?.name,
        description: product?.description,
        price: product?.price,
        stock: product?.stock,
        category: product?.category,
        volume: product?.volume
      });
    }
  }, [product, form]);

  return (
    <div className="w-full h-auto p-10 bg-background my-10 shadow-lg">
      <header>
        <h1 className="text-4xl font-bold">Edit Product with ID: {id}</h1>
      </header>

      <Form {...form}>
        <form
          className="mt-20 space-y-5"
          onSubmit={form.handleSubmit(handleUpdate)}
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

          {product?.cover && (
            <div className="mb-2">
              <p className="text-xs text-muted-foreground mb-1">
                Current Cover:
              </p>
              <Image
                src={`http://localhost:4000/uploads/${product.cover}`}
                width={100}
                height={100}
                alt="Current cover"
                className="rounded-md object-cover"
                unoptimized={true}
              />
            </div>
          )}

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
            <Button
              onClick={handleCancel}
              variant={"destructive"}
              className="w-1/3"
            >
              Cancel
            </Button>
            <Button disabled={isLoading} className="w-1/3">
              {isLoading ? <Spinner /> : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormEdit;
