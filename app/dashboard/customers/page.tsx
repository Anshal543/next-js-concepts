import { fetchFilteredCustomers } from "@/app/lib/data"
import CustomersTable from "@/app/ui/customers/table"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};
const Page = async ({searchParams}:{searchParams?:{
  query?: string,
  page?: number
}}) => {
  const query = searchParams?.query || ""
  const customers  =await  fetchFilteredCustomers(query)
  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  )
}

export default Page