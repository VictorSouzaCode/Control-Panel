'use client'
import { Sidebar, SidebarContent, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarNav from "./SidebarNav"
import { mainNav } from "./navItems"

//
// align icons and names properly
// add a footer with user and settings

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarNav items={mainNav}/>
      </SidebarContent>

      {/* Footer place if any */}
    </Sidebar>
  )
}

export default AppSidebar