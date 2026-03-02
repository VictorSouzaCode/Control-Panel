'use server'

import { cookies } from 'next/headers'

export async function getCurrentUSer() {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth_token")?.value

    if(!token) return null

    const res = await fetch("https://dummyjson.com/auth/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    })

    if(!res.ok) return null

    return res.json()
}