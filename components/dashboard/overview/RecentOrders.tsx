import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Order } from "@/lib/types/Orders"
import { getOrderStatus } from "@/lib/constants/orderStatus"
import StatusBadge from "./StatusBadge"


const RecentOrders = ({orders}: {orders: Order[]}) => {
  return (
    <div className="rounded-md border">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.slice(0, 5).map((order) => (
                    <TableRow key={order.id}>
                        <TableCell>#{order.id}</TableCell>
                        <TableCell>{order.userId}</TableCell>
                        <TableCell>{order.totalProducts}</TableCell>
                        <TableCell>{order.totalQuantity}</TableCell>
                        <TableCell>${order.discountedTotal.toFixed(2)}</TableCell>
                        <TableCell>
                            <StatusBadge status={getOrderStatus(order)}></StatusBadge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default RecentOrders