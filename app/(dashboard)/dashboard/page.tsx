import KpiCards from "@/components/dashboard/KpiCards"

const OverviewPage = () => {
  return (
    <div className="flex flex-col flex-1 min-h-full border">
      <div className="flex flex-1 justify-around">
        <KpiCards title="Total Customers" value="ronaldo"/>
        <KpiCards title="Total Customers" value="ronaldo"/>
        <KpiCards title="Total Customers" value="ronaldo"/>
        <KpiCards title="Total Customers" value="ronaldo"/>
      </div>

      <div>
        <h1>Another shit</h1>
      </div>
    </div>
  )
}

export default OverviewPage