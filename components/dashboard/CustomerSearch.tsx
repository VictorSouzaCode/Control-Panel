'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "../ui/input"
import { useState } from "react"

export const CustomerSearch = () => {
    const router = useRouter()
    const params = useSearchParams()
    const [value, setValue ] = useState(params.get("query") ?? "")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const query = value.trim()
        const next = query ? `/customers?query=${encodeURIComponent(query)}` : `/customers`

        router.push(next)
    }

  return (
    <form onSubmit={handleSubmit}>
        <Input
        placeholder="search customer..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
    </form>
  )
}