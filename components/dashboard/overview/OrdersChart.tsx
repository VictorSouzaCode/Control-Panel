'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { Order } from "@/lib/types/Orders"
import { buildChartData } from "@/lib/ultils/buildChartData"

type ChartProps = {
    orders: Order[]
}

const OrdersChart = ({orders}:ChartProps) => {
    const data = buildChartData(orders)

    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default OrdersChart