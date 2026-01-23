import Link from "next/link"
import { getOrders } from "@/lib/api/orders"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import StatusBadge from "@/components/dashboard/overview/StatusBadge"
import { getOrderStatus } from "@/lib/constants/orderStatus"


const OrdersPage = async () => {
  const orders = await getOrders()

  return (
    <div className="p-4 space-y-4">

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  No orders yet.
                </TableCell>
              </TableRow>
            ) : (
              orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>#{order.id}</TableCell>
                  <TableCell>{order.userId}</TableCell>
                  <TableCell>{order.totalProducts}</TableCell>
                  <TableCell>${order.discountedTotal.toFixed(2)}</TableCell>
                  <TableCell>
                    <StatusBadge status={getOrderStatus(order)} />
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/orders/${order.id}`}
                      className="text-sm hover:underline"
                    >
                      View
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default OrdersPage