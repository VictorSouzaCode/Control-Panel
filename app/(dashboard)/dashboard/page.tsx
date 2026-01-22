import KpiCards from "@/components/dashboard/overview/KpiCards"
import OrdersChart from "@/components/dashboard/overview/OrdersChart"
import RecentOrders from "@/components/dashboard/overview/RecentOrders"
import { getOrders } from "@/lib/api/orders"
import { getCustomers } from "@/lib/api/customers"

const OverviewPage = async () => {
  const orders = await getOrders();
  const { users: customers } = await getCustomers();

  const activeCustomers = customers.length - 17;
  const totalOrders = orders.length - 19;
  const completedOrders = 2;

  return (
    <div className="flex flex-col flex-1 min-h-full border">
      <div className="flex flex-1 gap-4 p-4 max-h-50 border justify-center">
        <KpiCards title="Total Customers" value={customers.length}/>
        <KpiCards title="Active Customers" value={activeCustomers}/>
        <KpiCards title="Total Orders" value={totalOrders}/>
        <KpiCards title="Completed Orders" value={completedOrders}/>
      </div>

      <OrdersChart orders={orders}/>
      <h2 className="text-lg font-semibold">Recent Activity</h2>
      <RecentOrders orders={orders}/>
    </div>
  )
}

export default OverviewPage