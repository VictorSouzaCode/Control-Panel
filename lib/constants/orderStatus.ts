import type { Order } from "../types/Orders";

export type OrderStatus = "Pending" | "Processing" | "Completed";

export function getOrderStatus(order: Order): OrderStatus {
    if(order.totalQuantity < 5) return "Pending";
    if(order.totalQuantity < 15) return "Processing";
    return "Completed"
}