import type { CustomerType } from "../types/customer"

type CustomerResponse = {
    users: CustomerType[]
    total: number,
    skip: number,
    limit: number
}

export async function getCustomers (opts?: { page?: number; limit?: number }){
    const page = opts?.page ?? 1
    const limit = opts?.limit ?? 0
    const skip = limit ? (page - 1) * limit : 0

    const url = limit ? `https://dummyjson.com/users?limit=${limit}&skip=${skip}` : `https://dummyjson.com/users`

    const res = await fetch(url, {
        next: { revalidate: 60 }
    });

    if(!res.ok) {
        throw new Error("Failed to fetch orders")
    }

    return res.json() as Promise<CustomerResponse>
}