import { ReactNode } from "react";
import PageHead from "../commons";
import Sidebar from "../admin/Sidebar";

type TProps = {
  title?: string;
  children: ReactNode;
};

const AdminLayout = ({ title, children }: TProps) => {
  return (
    <>
      <PageHead title={title} />

      <div className="flex gap-5">
        <Sidebar>
          <section className="max-w-screen-3xl 3xl:container p-6 bg-background relative flex w-full flex-1 flex-col md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2">
            {children}
          </section>
        </Sidebar>
      </div>
    </>
  );
};

export default AdminLayout;
