'use client'
import { 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar"
import Link from "next/link"
import type { ItemsType } from "@/lib/types/itemsType"
import { usePathname } from "next/navigation"

type SidebarNavProps = {
  label?: string,
  items: ItemsType
}

// Your SidebarNav should only render navigation.

const SidebarNav = ({
  label,
  items
}: SidebarNavProps) => {

  const pathname = usePathname()

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>{label}</SidebarGroupLabel> */}
      <SidebarTrigger className="cursor-pointer"/>

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
              asChild
              isActive={pathname === item.href}
              >
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