import { Bird } from "lucide-react"

const SidebarLogo = () => {
  return (
    <div className="flex items-center gap-2">
        <Bird className="h-6 w-6"/>
        <span className="font-semibold text-sm group-data-[collapsible=icon]:hidden">Ronaldo</span>
    </div>
  )
}

export default SidebarLogo