'use client'
import { 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import Link from "next/link"
import type { ItemsType } from "@/lib/types/itemsType"

type SidebarNavProps = {
  label: string,
  items: ItemsType
}

const SidebarNav = ({
  label,
  items
}: SidebarNavProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                <item.icon/>
                <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>

    </SidebarGroup>
  )
}

export default SidebarNav