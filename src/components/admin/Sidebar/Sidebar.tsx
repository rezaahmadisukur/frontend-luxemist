import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./app-sidebar";
import { ReactNode } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-full">
        <DashboardSidebar />
        {children}
      </div>
    </SidebarProvider>
  );
}
