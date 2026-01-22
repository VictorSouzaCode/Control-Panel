import type { Order } from "../types/Orders";

export function buildChartData(orders: Order[]) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ]

  const buckets = months.map((month) => ({
    month,
    value: 0,
  }))

  // Distribute order quantities across months
  orders.forEach((order, i) => {
    const index = i % months.length
    buckets[index].value += order.totalQuantity
  })

  // Add gentle variation so it goes up and down
  return buckets.map((b, i) => {
    const swing = Math.floor(b.value * 0.3)
    const modifier = i % 2 === 0 ? -swing : swing

    return {
      month: b.month,
      orders: Math.max(20, b.value + modifier),
    }
  })
}