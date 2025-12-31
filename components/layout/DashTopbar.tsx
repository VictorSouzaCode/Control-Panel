'use client'
import { User, Settings  } from "lucide-react"
import Link from "next/link"

const DashTopbar = () => {

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
    }

  return (
    <div className="border flex justify-between p-4 items-center h-16">
        <div className="border rounded-2xl bg-gray-600 text-white font-bold p-1">
            <h1>CP</h1>
        </div>
        <form 
        onSubmit={(e) => {
            handleSubmit(e)
        }} 
        className="border border-fuchsia-600 rounded-lg"
        >
            <input type="text" placeholder="search" className="indent-2 outline-none" />
        </form>

        <div className="border border-blue-500 flex gap-4">
            <Link href='/user'>
            <User/>
            </Link>

            <Link href='/settings'>
            <Settings/>
            </Link>
        </div>
    </div>
  )
}

export default DashTopbar