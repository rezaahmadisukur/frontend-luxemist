import { ReactNode } from "react";
import PageHead from "../commons";
import Navbar from "../guest/navbar/navbar";

type TProps = {
  title?: string;
  children: ReactNode;
};

const GuestLayout = ({ title, children }: TProps) => {
  return (
    <>
      <PageHead title={title} />
      <Navbar />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </>
  );
};

export default GuestLayout;
