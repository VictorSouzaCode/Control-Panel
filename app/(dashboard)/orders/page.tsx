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
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => (
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
                    className="text-sm underline"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default OrdersPage


/*
orders/[id]/page.tsx → Order Detail page

This page answers:

“What is going on with THIS specific order?”

What belongs here

Order summary

Status

Customer info

Items in the order

Actions (update status, cancel)

What does NOT belong here

Pagination

Lists of other orders

Filters

Think of this like opening a single email.
*/

/*
Final lock-in

orders/page.tsx → many orders

orders/[id]/page.tsx → one order

Same pattern for customers

Layout stays the same

Only content changes
*/