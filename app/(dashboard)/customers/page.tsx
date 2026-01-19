import Link from "next/link"
import { getCustomers } from "@/lib/api/customers"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const CustomersPage = async () => {
  const customers = await getCustomers()

  return (
    <div className="p-4 space-y-4">
        <h1 className="text-xl font-semibold">Customers</h1>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Country</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {customers.map((custom) => (
                <TableRow key={custom.id}>
                  <TableCell>#{custom.id}</TableCell>
                  <TableCell>
                    <Link
                    href={`/customers/${custom.id}`}
                    className="hover:underline" 
                    >
                    {custom.firstName} {custom.lastName}
                    </Link>
                  </TableCell>
                  <TableCell>{custom.email}</TableCell>
                  <TableCell>{custom.age}</TableCell>
                  <TableCell>{custom.address.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
    </div>
  )
}

export default CustomersPage