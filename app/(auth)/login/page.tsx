'use client'
// i Will use dummyJSON to fetch that data for this dashboard
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-8">

        <h1 className="text-6xl font-medium">Login</h1>

        <div className="flex flex-col gap-4 w-full max-w-87.5">
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        </div>

        <div className="flex gap-4 w-full max-w-87.5 justify-center">
          
          <Link href="/dashboard">
          <Button size="lg">
            Enter
          </Button>
          </Link>

          <Button size="lg">
            Login
          </Button>
        </div>
    </div>
  )
}

export default LoginPage