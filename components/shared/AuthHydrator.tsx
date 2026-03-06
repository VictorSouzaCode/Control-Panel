'use client'
import { useEffect } from "react"
import { useAuthStore } from "@/store/useAuthStore"
import type { UserType } from "@/lib/types/user"

type HydratorProps = {
    user: UserType | null
}

const AuthHydrator = ({ user }: HydratorProps) => {
    const setUser = useAuthStore((s) => s.setUser)

    useEffect(() => {
        setUser(user)

    }, [user, setUser])

  return null;
}

export default AuthHydrator


// bridge between server state and client state.

/*
Server components cannot access Zustand
Zustand only exists in the browser.
So I created this bridge component:
*/

/*
This setup solves several problems at once.
Security: Token never exposed to JavaScript

Reliability: Refresh page → server still knows the user

Performance: User fetched once in layout
Not on every component

*/