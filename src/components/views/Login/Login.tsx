import { PasswordInput } from "@/components/ui/password-input";
import useLogin from "@/hooks/useLogin";
import {
  Button,
  Card,
  Field,
  Flex,
  Input,
  Spinner,
  Stack
} from "@chakra-ui/react";
import Image from "next/image";
import { Controller } from "react-hook-form";

const Login = () => {
  const { form, handleLogin, isLoading } = useLogin();

  return (
    <Card.Root className="rounded-5xl overflow-hidden" width={1024}>
      <Flex gap={5}>
        {/* Left */}
        <div className="lg:block hidden w-1/3">
          <Image
            src={`/images/illustrations/logo.gif`}
            alt="logo"
            width={1024}
            height={1024}
            unoptimized
            className="w-full"
          />
        </div>

        {/* Right */}
        <Card.Body>
          <Card.Title>LuxeMist - Login</Card.Title>
          <Card.Description>Welcome administrator</Card.Description>

          <Flex flexDirection={"column"} marginTop={10}>
            <form onSubmit={form.handleSubmit(handleLogin)}>
              <Stack gap="5" align="flex-start">
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <Field.Root>
                      <Field.Label>Email</Field.Label>
                      <Input {...field} autoComplete="off" />
                    </Field.Root>
                  )}
                />

                <Controller
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <Field.Root>
                      <Field.Label>Password</Field.Label>
                      <PasswordInput {...field} autoComplete="off" autoFocus />
                    </Field.Root>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  marginTop={10}
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner size="sm" /> : "Login"}
                </Button>
              </Stack>
            </form>
          </Flex>
        </Card.Body>
      </Flex>
    </Card.Root>
  );
};

export default Login;
