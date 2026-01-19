import { getCustomers } from "@/lib/api/customers"
import { notFound } from "next/navigation"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

type Props = {
  params: Promise<{ id: string }>
}

const CustomerInfo = async ({ params }: Props) => {
  const { id } = await params
  const customers = await getCustomers()
  
  const customer = customers.find(
    (c) => c.id === Number(id)
  )

  if (!customer) return notFound()

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">
        Customer #{id}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <p><strong>Name:</strong> {customer.firstName} {customer.lastName}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Age:</strong> {customer.age}</p>
            <p><strong>Gender:</strong> {customer.gender}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <p>{customer.address.address}</p>
            <p>{customer.address.city}</p>
            <p>{customer.address.state}</p>
            <p>{customer.address.country}</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <p><strong>Card:</strong> {customer.bank.cardType}</p>
            <p><strong>Number:</strong> {customer.bank.cardNumber}</p>
            <p><strong>Expires:</strong> {customer.bank.cardExpire}</p>
            <p><strong>Currency:</strong> {customer.bank.currency}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CustomerInfo