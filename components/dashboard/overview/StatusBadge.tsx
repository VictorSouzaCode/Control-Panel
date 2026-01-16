import { Badge } from "@/components/ui/badge"

type BadgeProps = {
    status: string
}

const StatusBadge = ({status}:BadgeProps) => {
    const textColor = status === 'completed' ? "bg-green-500" : "bg-red-500"

  return (
    <Badge className={textColor}>{status}</Badge>
  )
}

export default StatusBadge