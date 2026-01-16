import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./app-sidebar";
import { ReactNode } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <DashboardSidebar />

        <div className="w-full">{children}</div>
      </div>
    </SidebarProvider>
  );
}
