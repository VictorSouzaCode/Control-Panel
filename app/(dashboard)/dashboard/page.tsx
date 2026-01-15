'use client'
import KpiCards from "@/components/dashboard/overview/KpiCards"
import OrdersChart from "@/components/dashboard/overview/OrdersChart"
import RecentOrders from "@/components/dashboard/overview/RecentOrders"
import type { Order } from "@/lib/types/Orders"

const orders = [
  {
  id: 2,
  customerName: "Dough",
  status: "pending",
  date: "02/02/2026"
},
{
  id: 3,
  customerName: "Shablau",
  status: "confirmed",
  date: "02/02/2026"
},
{
  id: 4,
  customerName: "Rob",
  status: "pending",
  date: "02/02/2026"
},
{
  id: 5,
  customerName: "Brok",
  status: "Confirmed",
  date: "02/02/2026"
}
]

const OverviewPage = () => {
  return (
    <div className="flex flex-col flex-1 min-h-full border">
      <div className="flex flex-1 justify-around">
        <KpiCards title="Total Customers" value="ronaldo"/>
        <KpiCards title="Total Customers" value="ronaldo"/>
        <KpiCards title="Total Customers" value="ronaldo"/>
        <KpiCards title="Total Customers" value="ronaldo"/>
      </div>

      <OrdersChart/>
      <h2 className="text-lg font-semibold">Recent Activity</h2>
      <RecentOrders orders={orders}/>
    </div>
  )
}

export default OverviewPage