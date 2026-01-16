import { Badge } from "@/components/ui/badge"

type BadgeProps = {
    status: string
}

const StatusBadge = ({status}:BadgeProps) => {
    const statusColor = {
        Pending: "bg-yellow-100 text-yellow-800",
        Processing: "bg-blue-100 text-blue-800",
        Completed: "bg-green-100 text-green-800"
    }

  return (
    <Badge className={statusColor[status as keyof typeof statusColor]}>{status}</Badge>
  )
}

export default StatusBadge