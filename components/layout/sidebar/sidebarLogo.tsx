import { MonitorCog } from "lucide-react"

const SidebarLogo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="shrink-0">
        <MonitorCog  className="h-6 w-6" />
      </div>
      <div className="shrink-0">
      <span className="font-semibold text-sm group-data-[collapsible=icon]:hidden">Control Panel</span>
      </div>
    </div>
  )
}

export default SidebarLogo