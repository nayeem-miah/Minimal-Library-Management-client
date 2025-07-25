import { BorrowTable } from "@/components/borrowSummary/borrowTable"

function BorrowSummary() {
    return (
        <div >
            <div className="flex justify-center items-center mx-auto mt-6 mb-4">
                <h1 className="text-2xl font-semibold">Borrow Summary</h1>
            </div>
            {/*  borrow table */}
            <BorrowTable />
        </div>
    )
}

export default BorrowSummary