'use client'
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import SidebarNav from "./SidebarNav"
import { mainNav } from "./navItems"

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarNav label="Main" items={mainNav}/>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar