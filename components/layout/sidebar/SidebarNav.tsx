'use client'
import { 
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import Link from "next/link"
import type { ItemsType } from "@/lib/types/itemsType"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/useAuthStore"

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
  const logout = useAuthStore((s) => s.logout)

  function handleLogout() {
    logout();
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
                  className="h-12"
                >
                  {isLogout ? (
                    <div className="flex items-center gap-4 px-3 cursor-pointer">
                      <item.icon/>
                      <span>{item.title}</span>
                    </div>
                  ) : (
                    <Link href={item.href} className="flex items-center gap-3 px-3">
                      <item.icon/>
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