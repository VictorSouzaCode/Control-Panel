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
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/useAuthStore"
import { Button } from "@/components/ui/button"

type SidebarNavProps = {
  label?: string,
  items: ItemsType
}

const SidebarNav = ({
  label,
  items
}: SidebarNavProps) => {

  const pathname = usePathname();
  const router = useRouter();
  const logoutStore = useAuthStore((s) => s.logout)

  function handleLogout() {
    document.cookie = "auth_token=; path=/; max-age=0"
    logoutStore();
    router.push("/login")
  }

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>{label}</SidebarGroupLabel> */}

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isLogout = item.function === "logout";

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={!isLogout && pathname === item.href}
                  onClick={isLogout ? handleLogout : undefined}
                  asChild
                >
                  {isLogout ? (
                    <div className="cursor-pointer">
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  )}

                </SidebarMenuButton>
              </SidebarMenuItem>)

          })}
        </SidebarMenu>
      </SidebarGroupContent>

    </SidebarGroup>
  )
}

export default SidebarNav