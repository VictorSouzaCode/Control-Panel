import DashTopbar from "@/components/layout/DashTopbar"
import AppSidebar from "@/components/layout/sidebar/AppSidebar"
import React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"


type DashboardLayout = {
  children: React.ReactNode
}

const DashboardLayout = ({children}:DashboardLayout) => {
  return (
    <SidebarProvider>
    <div className="flex w-full min-h-screen">
        <AppSidebar/>

        <div className="border border-amber-500 flex flex-col flex-1">
          <DashTopbar />
          <main className="flex-1">{children}</main>
        </div>
    </div>
    </SidebarProvider>
  )
}

export default DashboardLayout