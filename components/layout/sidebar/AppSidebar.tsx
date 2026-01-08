'use client'
import { Sidebar, SidebarContent, SidebarTrigger, SidebarHeader } from "@/components/ui/sidebar"
import SidebarNav from "./SidebarNav"
import { mainNav } from "./navItems"
import SidebarLogo from "./sidebarLogo"


const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      
      <SidebarHeader className="border-b h-16 flex justify-center">
        <SidebarLogo/>
      </SidebarHeader>

      <SidebarContent>
        <SidebarNav items={mainNav}/>
      </SidebarContent>

      {/* Footer place if any */}
    </Sidebar>
  )
}

export default AppSidebar