import KpiCards from "@/components/dashboard/overview/KpiCards"
import OrdersChart from "@/components/dashboard/overview/OrdersChart"
import RecentOrders from "@/components/dashboard/overview/RecentOrders"
import { getOrders } from "@/lib/api/orders"


const OverviewPage = async () => {
  const orders = await getOrders();
  console.log(orders)

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