import { ReactNode } from "react";
import PageHead from "../commons";

type TProps = {
  title?: string;
  children: ReactNode;
};

const AuthAdminLayout = ({ title, children }: TProps) => {
  return (
    <>
      <PageHead title={title} />
      {/* <main className="max-w-full w-full min-h-screen">{children}</main> */}
      <main className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-4xl">{children}</div>
      </main>
    </>
  );
};

export default AuthAdminLayout;
