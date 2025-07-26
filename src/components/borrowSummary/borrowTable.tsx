import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi"
import Loader from "../Loader";
import type { IBorrowSummary } from "@/types";



export function BorrowTable() {
    const { data, isLoading } = useGetBorrowSummaryQuery(undefined, {
        pollingInterval: 30000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    });
    // console.log(data);


    if (isLoading) return <Loader />
    return (
        <Table className="mb-2">
            {data && data.data.length > 0 && <><TableHeader>
                <TableRow>
                    <TableHead className="">title</TableHead>
                    <TableHead>isbn</TableHead>
                    <TableHead className="">totalQuantity</TableHead>
                </TableRow>
            </TableHeader><TableBody>
                    {data.data.map((data: IBorrowSummary) => (
                        <TableRow key={data.isbn}>
                            <TableCell className="font-medium">{data.title}</TableCell>
                            <TableCell>{data.isbn}</TableCell>
                            <TableCell className="">{data.totalQuantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody></>
            }
            {data && data.data.length === 0 && (
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={3} className="text-center">
                            No borrow summary available.
                        </TableCell>
                    </TableRow>
                </TableBody>
            )}
        </Table>
    )
}
