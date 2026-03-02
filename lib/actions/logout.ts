'use server'
import { cookies } from "next/headers";

export async function logoutAction () {
    try {
        const cookieStore = await cookies()

        cookieStore.delete("auth_token")

        return { success: true }
        
    } catch (error) {
        console.error('Logout error:', error)
        throw new Error("Logout Failed")
        
    }
}