import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import useLogin from "@/hooks/useLogin";
import { Spinner } from "@/components/ui/spinner";

const Login = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { form, handleLogin, isLoading } = useLogin();
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2 items-center">
          <Form {...form}>
            <form
              className="p-6 md:p-8 flex flex-col gap-5"
              onSubmit={form.handleSubmit(handleLogin)}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome Back</h1>
                <p className="text-muted-foreground text-balance">
                  Hello Master, Comeback against
                </p>
              </div>

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        autoComplete="off"
                        autoFocus
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel htmlFor="password">Password</FormLabel>
                    </div>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        {...field}
                        placeholder="********"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Spinner /> : "Login"}
                </Button>
              </FormItem>
            </form>
          </Form>
          <div className="bg-muted relative hidden md:block">
            <Image
              width={1024}
              height={1024}
              src="/images/illustrations/logo.png"
              alt="Image"
              className="w-full h-full bg-white"
              unoptimized
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
