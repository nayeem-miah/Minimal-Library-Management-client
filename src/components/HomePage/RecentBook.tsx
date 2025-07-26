import { useGetRecentBookQuery } from "@/redux/api/baseApi"
import { BookCard } from "../card/BookCard"
import Loader from "../Loader";
import type { IBook } from "@/types";
import { Button } from "../ui/button";
import { Link } from "react-router";

function RecentBook() {
    const { data, isLoading } = useGetRecentBookQuery(undefined, {
        pollingInterval: 30000,
        refetchOnFocus: true,
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true
    })

    console.log(data);
    if (isLoading) return <Loader />
    return (
        <div>
            <div>
                <h3 className="text-center font-bold text-3xl mt-8 mb-6 ">Recent Book</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {data && data.data.length > 0 && data.data.map((book: IBook) => (
                        <BookCard book={book} key={book._id} />)
                    )}
                </div>
                {data.data.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center py-20">
                        <h3 className="text-xl text-red-500 font-semibold mb-2">No books available</h3>
                        <p className="text-gray-500 mb-4">There are currently no books in the library. </p>
                        <Button onClick={() => window.location.href = "/add-books"} className="bg-pink-600 text-white">
                            Add New Book
                        </Button>
                    </div>
                )}
            </div>

            <div className="flex justify-center mt-6">
                <Link to={"/all-books"}>
                    <Button variant={"outline"} className=" border-pink-600 border-2">show all Books</Button>
                </Link>
            </div>
        </div>
    )
}

export default RecentBook