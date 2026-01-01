'use client'
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import SidebarNav from "./SidebarNav"
import { mainNav } from "./navItems"


// what should i do next to finish this sidebar?
// collapsable button
// improve the label
// align icons and names properly
// add a footer with user and settings

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