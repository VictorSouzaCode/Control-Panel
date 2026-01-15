import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Order } from "@/lib/types/Orders"

const RecentOrders = ({orders}: {orders: Order[]}) => {
  return (
    <div className="rounded-md border">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.slice(0, 5).map((order) => (
                    <TableRow key={order.id}>
                        <TableCell>#{order.id}</TableCell>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell>{order.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default RecentOrders