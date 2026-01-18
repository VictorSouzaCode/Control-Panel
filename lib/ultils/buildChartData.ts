import type { Order } from "../types/Orders";

export function buildChartData(orders: Order[]) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const buckets = days.map((day) => ({
    day,
    value: 0,
  }));

  // Base distribution from real data
  orders.forEach((order) => {
    const index = order.id % days.length;
    buckets[index].value += order.totalQuantity;
  });

  // Make it cumulative with wobble
  for (let i = 1; i < buckets.length; i++) {
    const baseGrowth = buckets[i].value;
    const wobble = Math.floor((baseGrowth * 0.2) * ((i % 2 === 0) ? -1 : 1));

    buckets[i].value = buckets[i - 1].value + baseGrowth + wobble;
  }

  return buckets;
}