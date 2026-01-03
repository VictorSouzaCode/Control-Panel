'use client'
import { User, Settings  } from "lucide-react"
import Link from "next/link"
import { SidebarTrigger } from "../ui/sidebar"

const DashTopbar = () => {

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
    }

  return (
    <header className="border flex justify-center p-4 items-center h-16">
        <SidebarTrigger className="md:hidden"/>
        <form 
        onSubmit={(e) => {
            handleSubmit(e)
        }} 
        className="border border-fuchsia-600 rounded-lg"
        >
            <input type="text" placeholder="search" className="indent-2 outline-none" />
        </form>
    </header>
  )
}

export default DashTopbar