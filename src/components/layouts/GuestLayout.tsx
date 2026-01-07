import { ReactNode } from "react";
import PageHead from "../commons";

type TProps = {
  title?: string;
  children: ReactNode;
};

const GuestLayout = ({ title, children }: TProps) => {
  return (
    <>
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </>
  );
};

export default GuestLayout;
