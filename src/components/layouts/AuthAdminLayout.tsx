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
      <section className="max-w-screen-3xl 3xl:container p-6 flex justify-center items-center min-h-screen">
        {children}
      </section>
    </>
  );
};

export default AuthAdminLayout;
