// import type { Order } from "../types/Orders2";

export type Order = {
    id: number,
    userId: number,
    total: number,
    totalProducts: number,
    totalQuantity: number,
    products: {
        id: number,
        title: string,
        price: number,
        quantity: number,
        total: number,
    }[],
};

type  OrdersResponse = {
    carts: Order[],
    total: number,
    skip: number,
    limit: number
}


export async function getOrders(): Promise<Order[]> {
    const res = await fetch("https://dummyjson.com/carts", {
        next: { revalidate: 60 },
    });

    if(!res.ok) {
        throw new Error("Failed to fetch orders")
    }

    const data: OrdersResponse = await res.json();
    return data.carts
}