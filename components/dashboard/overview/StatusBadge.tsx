import { Badge } from "@/components/ui/badge"

type Status = | "Pending" | "Processing" | "Completed" | "Active" | "Inactive" | "Blocked"

type BadgeProps = {
    status: string
}

const StatusBadge = ({ status }:BadgeProps) => {
    const statusColor: Record<Status, string> = {
        Pending: "bg-yellow-100 text-yellow-800",
        Processing: "bg-blue-100 text-blue-800",
        Completed: "bg-green-100 text-green-800",

        Active: "bg-green-100 text-green-800",
        Inactive: "bg-gray-100 text-gray-700",
        Blocked: "bg-red-100 text-red-800"
    }

  return (
    <Badge className={statusColor[status as keyof typeof statusColor]}>{status}</Badge>
  )
}

export default StatusBadge