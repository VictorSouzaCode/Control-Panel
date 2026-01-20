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

type CustomerPageProps = {
  searchParams: Promise<{ page?: string}>
}

const PAGE_SIZE = 10

const CustomersPage = async ({ searchParams }: CustomerPageProps) => {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  const { users, total } = await getCustomers({
    page: currentPage,
    limit: PAGE_SIZE
  })

  const totalPages = 3


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
              {users.map((u) => (
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