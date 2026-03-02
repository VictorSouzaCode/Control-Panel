import DashTopbar from "@/components/layout/DashTopbar"
import AppSidebar from "@/components/layout/sidebar/AppSidebar"
import React from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { getCurrentUSer } from "@/lib/api/getCurrentUser"
import AuthHydrator from "@/components/shared/AuthHydrator"

export const metadata = {
  title: "Dashboard | Control Panel",
};

type DashboardLayout = {
  children: React.ReactNode
}

const DashboardLayout = async ({children}:DashboardLayout) => {
  const user = await getCurrentUSer()

  console.log("server user:", user)

  return (
    <SidebarProvider>
      <AuthHydrator user={user}/>
    <div className="flex w-full min-h-screen">
      <AppSidebar/>

      <SidebarInset className="flex flex-1 flex-col">
          <DashTopbar />
          
          <main className="flex-1 min-w-0">{children}</main>

        </SidebarInset>
    </div>
    </SidebarProvider>
  )
}

export default DashboardLayout