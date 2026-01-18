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

export async function getCustomers ({
    page = 1,
    limit = 10,
    q = "",
}:GetCustomersParams = {}):Promise<CustomerResponse>{
    const skip = (page - 1) * limit;

    const url = q
    ? `https://dummyjson.com/users/search?q=${q}&limit=${limit}&skip=${skip}`
    : `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;

    const res = await fetch(url, {
        next: { revalidate: 60 }
    });

    if(!res.ok) {
        throw new Error("Failed to fetch orders")
    }

    return res.json();
}