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
import { Suspense } from "react"
import { TableSkeleton } from "@/components/shared/TableSkeleton"


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
    <div className="p-4 space-y-4 flex flex-col max-w-screen">
      <div className="flex items-center justify-between">
        <CustomerSearch/>
      </div>
        

        <div className="rounded-md border">
          <Suspense fallback={<TableSkeleton rows={5} cols={6}/>}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

          <TableBody>
            {
              filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                    No customers found.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((u) => (
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
                  <TableCell>{u.age}</TableCell>
                  <TableCell>{u.address.country}</TableCell>
                  <TableCell>
                    <StatusBadge status={getCustomerStatus(u.age)} />
                  </TableCell>
                </TableRow>
              ))
              )
            }
          </TableBody>
        </Table>
        </Suspense>
      </div>

        <div className="flex items-center justify-between">
    <span className="text-sm text-muted-foreground">
      Page {currentPage} of {totalPages}
    </span>

    <div className="flex gap-2">
      {currentPage > 1 && (
        <Link href={`/customers?page=${currentPage - 1}`}>
          <Button size="sm" variant="outline" className="cursor-pointer">
            Previous
          </Button>
        </Link>
      )}

      {currentPage < totalPages && (
        <Link href={`/customers?page=${currentPage + 1}`}>
          <Button size="sm" className="cursor-pointer">
            Next
          </Button>
        </Link>
      )}
    </div>
        </div>
    </div>
  )
}

export default CustomersPage


/*
filtered.map((u) => (
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
                  <TableCell>{u.age}</TableCell>
                  <TableCell>{u.address.country}</TableCell>
                  <TableCell>
                    <StatusBadge status={getCustomerStatus(u.age)} />
                  </TableCell>
                </TableRow>
              ))
              */