'use server'

import { cookies } from 'next/headers'

export async function getCurrentUSer() {
    const cookieStore = await cookies()
    
    const userCookie = cookieStore.get("auth_token")?.value

    if(!userCookie) return null;

    return JSON.parse(userCookie)
}