'use server'

import { cookies } from "next/headers"
import { login } from "../api/auth"

export async function loginAction (username: string, password: string) {
    try {
        const user = await login(username, password)

        const cookieStore = await cookies()

        cookieStore.set("auth_store", user.token, {
          path: "/",
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return { success: true, user }
        
    } catch (error) {
        console.error('Login error:', error);
        throw new Error("Invalid credentials");
    }
}