'use client'
import KpiCards from "@/components/dashboard/KpiCards"
import OrdersChart from "@/components/dashboard/OrdersChart"

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
    </div>
  )
}

export default OverviewPage