'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// I need to delete the chart branch

const chartData = [
    { day: "Mon", orders: 12 },
    { day: "Tue", orders: 18 },
    { day: "Wed", orders: 9 },
    { day: "Thu", orders: 24 },
    { day: "Fri", orders: 30 },
]

const OrdersChart = () => {
    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="orders" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default OrdersChart