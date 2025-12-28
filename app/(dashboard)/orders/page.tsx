
const OrdersPage = () => {
  return (
    <div>
        <h1>OrdersPage</h1>
    </div>
  )
}

export default OrdersPage

/*
The simple rule

orders/page.tsx = the LIST
orders/[id]/page.tsx = the DETAILS

That’s it. That pattern repeats everywhere.
*/

/*
orders/page.tsx → Orders List page

This page answers:

“What orders exist, and which one do I want to look at?”

What belongs here

Orders table

Filters (status, date)

Pagination

Click → go to order details

What does NOT belong here

Deep order info

Item breakdown

Customer profile

Editing everything

Think of it like Gmail inbox.
*/

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