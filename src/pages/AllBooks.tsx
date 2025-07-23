import { BookCard } from "@/components/card/BookCard";
import { useGetBooksQuery } from "@/redux/api/baseApi"
import type { IBook } from "@/types";


function AllBooks() {
    // get all books from the database
    const { data, isLoading, isError } = useGetBooksQuery(undefined);
    console.log(data);
    // console.log({ data, isLoading, isError });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading books</div>;
    return (
        <div>
            <div>
                <h3>Show all books</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        !isLoading && !isError && data?.data?.length > 0 ? (
                            data.data.map((book: IBook) => (
                                <BookCard book={book} />
                            ))
                        ) : <div>No books available</div>

                    }
                </div>

            </div>
        </div>
    )
}

export default AllBooks