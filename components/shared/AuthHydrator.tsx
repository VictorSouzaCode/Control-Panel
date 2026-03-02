'use client'
import { useEffect } from "react"
import { useAuthStore } from "@/store/useAuthStore"
import type { UserType } from "@/lib/types/user"

// bridge between server state and client state.

type HydratorProps = {
    user: UserType
}

const AuthHydrator = ({ user }: HydratorProps) => {
    const setUser = useAuthStore((s) => s.setUser)

    useEffect(() => {
        console.log("HYDRATING USER:", user)
        setUser(user)

    }, [user, setUser])

  return null;
}

export default AuthHydrator