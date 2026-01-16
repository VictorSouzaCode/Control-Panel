import type { Order } from "../types/Orders";

export type OrderStatus = "Pending" | "Processing" | "Completed";

export function getOrderStatus(order: Order): OrderStatus {
    if (order.id % 3 === 0) return "Pending";
    if (order.id % 3 === 1) return "Processing";
    return "Completed";
}