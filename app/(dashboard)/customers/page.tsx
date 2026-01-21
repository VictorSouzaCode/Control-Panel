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
import { Button } from "@/components/ui/button"
import { CustomerSearch } from "@/components/dashboard/CustomerSearch"
import { getCustomerStatus } from "@/lib/constants/customersStatus"
import StatusBadge from "@/components/dashboard/overview/StatusBadge"


type CustomerPageProps = {
  searchParams: Promise<{ page?: string, query?: string}>
}

const PAGE_SIZE = 10

const CustomersPage = async ({ searchParams }: CustomerPageProps) => {
  const { page, query } = await searchParams;
  const currentPage = Number(page) || 1;
  const search = query?.toLowerCase() ?? ""

  const { users } = await getCustomers({
    page: currentPage,
    limit: PAGE_SIZE
  })

  const filtered = search ? users.filter((c) => `${c.firstName} ${c.lastName}`.toLowerCase().includes(search) || c.email.toLowerCase().includes(search)) : users

  const totalPages = 3


  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Customers</h1>
        <CustomerSearch/>
      </div>
        

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
              {filtered.map((u) => (
                <TableRow key={u.id}>
                  <TableCell>#{u.id}</TableCell>
                  <TableCell>
                    <Link
                    href={`/customers/${u.id}`}
                    className="hover:underline" 
                    >
                    {u.firstName} {u.lastName}
                    </Link>
                  </TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.age}</TableCell>
                  <TableCell>{u.address.country}</TableCell>
                  <TableCell>
                    <StatusBadge status={getCustomerStatus(u.age)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          {/* Later: improve buttons initial and final positions */}
          <div className="flex justify-between">
            <Link 
              href={`/customers?page=${currentPage - 1}`}
              >
                <Button size="sm" className="cursor-pointer">Previous</Button>
              </Link>
              <Link 
              href={`/customers?page=${currentPage + 1}`}>
                <Button size="sm" className="cursor-pointer">Next</Button>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default CustomersPage

// old code for buttons position
/* 
              {currentPage > 1 && (
              <Link 
              href={`/customers?page=${currentPage - 1}`}
              >
                <Button size="sm" className="cursor-pointer">Previous</Button>
              </Link>
            )}
            {currentPage < totalPages && (
              <Link 
              href={`/customers?page=${currentPage + 1}`}>
                <Button size="sm" className="cursor-pointer">Next</Button>
              </Link>
            )}
*/