'use client'
import { Search } from "lucide-react"
import Link from "next/link"
import { SidebarTrigger } from "../ui/sidebar"


function DashTopbar() {
  return (
    <header className="flex h-16 border-b items-center">

      <div className="flex w-full gap-1 items-center px-4 py-3 lg:gap-2 lg:px-6">

        <SidebarTrigger className="-ml-1" />

      {/* TOPBAR CONTENT */}
      {/* Here put the current page i am in, make it dynamic */}

      <div className="ml-auto flex items-center gap-2">
        <span className="font-bold">User</span>
        <span>|</span>
        <span className="font-bold">Theme</span>
      </div>
      </div>

    </header>
  )
}

export default DashTopbar