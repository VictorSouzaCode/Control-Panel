import KpiCards from "@/components/dashboard/overview/KpiCards"
import OrdersChart from "@/components/dashboard/overview/OrdersChart"
import RecentOrders from "@/components/dashboard/overview/RecentOrders"
import { getOrders } from "@/lib/api/orders"
import { getCustomers } from "@/lib/api/customers"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Suspense } from "react"
import { KpiSkeleton } from "@/components/dashboard/overview/KpiSkeleton"

// improviments to be made
// Server cookie caching working
// Zustand removed
// One reusable component extracted
// Go back button when entering single order or client

export const metadata = {
  title: "Overview | Control Panel",
};

const OverviewPage = async () => {
  const orders = await getOrders();
  const { users: customers } = await getCustomers();

  const activeCustomers = customers.length - 17;
  const totalOrders = orders.length - 19;
  const completedOrders = 2;

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Suspense
          fallback={
            <>
              <KpiSkeleton />
              <KpiSkeleton />
              <KpiSkeleton />
              <KpiSkeleton />
            </>
          }
        >
          <KpiCards title="Total Customers" value={customers.length} />
          <KpiCards title="Active Customers" value={activeCustomers} />
          <KpiCards title="Total Orders" value={totalOrders} />
          <KpiCards title="Completed Orders" value={completedOrders} />
        </Suspense>
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