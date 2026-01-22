'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import type { Order } from "@/lib/types/Orders"
import { buildChartData } from "@/lib/ultils/buildChartData"

type ChartProps = {
    orders: Order[]
}

const OrdersChart = ({orders}:ChartProps) => {
    const data = buildChartData(orders)

    return (
        <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "white",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 12,
            }}
          />

          <Area
            type="monotone"
            dataKey="orders"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#ordersGradient)"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    )
}

export default OrdersChart