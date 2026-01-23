import { getOrders } from "@/lib/api/orders"
import { notFound } from "next/navigation"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import StatusBadge from "@/components/dashboard/overview/StatusBadge"
import { getOrderStatus } from "@/lib/constants/orderStatus"

type Props = {
  params: Promise<{ id: string }>
}

const OrderInfo = async ({ params }: Props) => {
  const { id } = await params
  const orders = await getOrders()

  const order = orders.find((o) => o.id === Number(id))
  if (!order) return notFound()

  return (
    <div className="p-4 space-y-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Order #{order.id}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Customer:</strong> {order.userId}</p>
            <p><strong>Items:</strong> {order.totalProducts}</p>
            <p><strong>Quantity:</strong> {order.totalQuantity}</p>
            <p><strong>Total:</strong> ${order.discountedTotal.toFixed(2)}</p>
            <div className="pt-2">
              <StatusBadge status={getOrderStatus(order)} />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {order.products.map((p) => (
              <div
                key={p.id}
                className="flex justify-between border-b pb-1"
              >
                <span className="w-full">{p.title}</span>
                <span className="w-full flex justify-center items-center">x{p.quantity}</span>
                <span className="w-full flex justify-end items-center">${p.total}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OrderInfo