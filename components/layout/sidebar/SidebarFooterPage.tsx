'use client'
import { SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import Link from 'next/link'
import type { ItemsType } from "@/lib/types/itemsType"

// maybe a component to use.

type SidebarFooterProps = {
  items: ItemsType
}

const SidebarFooterPage = ({
  items
}:SidebarFooterProps) => {

  return (
    <SidebarFooter>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>

              <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
              </Link>

          </SidebarMenuButton>
        </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarFooter>
  )
}

export default SidebarFooterPage