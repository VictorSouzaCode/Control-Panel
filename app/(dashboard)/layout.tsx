import DashTopbar from "@/components/layout/DashTopbar"
import AppSidebar from "@/components/layout/sidebar/AppSidebar"
import React from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

type DashboardLayout = {
  children: React.ReactNode
}

const DashboardLayout = ({children}:DashboardLayout) => {
  return (
    <SidebarProvider>
    <div className="flex w-full min-h-screen">
      <AppSidebar/>

      <SidebarInset className="flex flex-1 flex-col">
          <DashTopbar />
          
          <main className="flex-1">{children}</main>

        </SidebarInset>
    </div>
    </SidebarProvider>
  )
}

export default DashboardLayout