import DashSidebar from "@/components/layout/DashSidebar"
import DashTopbar from "@/components/layout/DashTopbar"
import AppSidebar from "@/components/layout/sidebar/AppSidebar"
import React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"


type DashboardLayout = {
  children: React.ReactNode
}

const DashboardLayout = ({children}:DashboardLayout) => {
  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        {/* <DashSidebar /> */}
        <AppSidebar/>

        <div className="border border-amber-500 flex flex-col flex-1">
          <DashTopbar />
          <main className="flex-1">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default DashboardLayout