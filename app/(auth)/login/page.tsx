'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

// Next step is to build the authentication logic

const LoginPage = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword] = useState('')

  const handleLogin = () => {

    if(email === "" && password === "") {
      alert("no email or password")

    } else if (email === "") {
      alert("no email")

    } else if (password === "") {
      alert('no password')
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-8">

        <h1 className="text-6xl font-medium">Login</h1>

        <div className="flex flex-col gap-4 w-full max-w-87.5">
        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="flex gap-4 w-full max-w-87.5 justify-center">

          <Link href="/dashboard">
          <Button size="lg" className="cursor-pointer">
            Enter
          </Button>
          </Link>

          <Button size="lg" className="cursor-pointer" onClick={handleLogin}>
            Login
          </Button>
        </div>
    </div>
  )
}

export default LoginPage