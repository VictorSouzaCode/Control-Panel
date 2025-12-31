'use client'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../ui/sidebar"
import Link from "next/link"

// so professionals actually destructure the side bar in smaller components, and they see sidebar as component but as a system instead and it is complex.
// so if i build this side bar it is going to take some work
// first build the separate components, header, main content, footer,
// then links, routes, functionality
// so i need to see the folder structure for the sibar
// where it goes in the app 

const DashSidebar = () => {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Control Panel</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard">
                                        <span>Home</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/settings">
                                        <span>Settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>

                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/account">
                                <span>Account</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default DashSidebar