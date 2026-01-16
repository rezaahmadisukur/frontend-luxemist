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
          <section className="mb-20 ">{children}</section>
        </Sidebar>
      </div>
    </>
  );
};

export default AdminLayout;
