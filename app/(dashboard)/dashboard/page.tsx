import KpiCards from "@/components/dashboard/overview/KpiCards"
import OrdersChart from "@/components/dashboard/overview/OrdersChart"
import RecentOrders from "@/components/dashboard/overview/RecentOrders"
import { getOrders } from "@/lib/api/orders"
import { getCustomers } from "@/lib/api/customers"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const OverviewPage = async () => {
  const orders = await getOrders();
  const { users: customers } = await getCustomers();

  const activeCustomers = customers.length - 17;
  const totalOrders = orders.length - 19;
  const completedOrders = 2;

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCards title="Total Customers" value={customers.length}/>
        <KpiCards title="Active Customers" value={activeCustomers}/>
        <KpiCards title="Total Orders" value={totalOrders}/>
        <KpiCards title="Completed Orders" value={completedOrders}/>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>
            Orders over time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <OrdersChart orders={orders}/>
        </CardContent>
      </Card>

      {/* Table */}

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentOrders orders={orders}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default OverviewPage