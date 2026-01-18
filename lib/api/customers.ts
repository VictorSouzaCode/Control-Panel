import type { CustomerType } from "../types/customer"

type CustomerResponse = {
    users: CustomerType[]
    total: number,
    skip: number,
    limit: number
}

type GetCustomersParams = {
    page?: number,
    limit?: number,
    q?: string,
}

export async function getCustomers ():Promise<CustomerType[]>{
    const res = await fetch("https://dummyjson.com/users", {
        next: { revalidate: 60 }
    });

    if(!res.ok) {
        throw new Error("Failed to fetch orders")
    }

    const data: CustomerResponse = await res.json();
    return data.users
}