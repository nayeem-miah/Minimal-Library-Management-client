import { BookCard } from "@/components/card/BookCard";
import { Button } from "@/components/ui/button";
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
                        ) : <div className="flex flex-col items-center justify-center mx-auto max-w-4xl">
                            <h3 className="text-red-400 text-2xl text-center">No books available</h3>
                            <p className="text-gray-600 text-center">There are currently no books available in the library.</p>
                            <Button className="mt-4 bg-pink-600 " variant="secondary" onClick={() => window.location.href = "/add-books"}>
                                Add New Book
                            </Button>
                        </div>

                    }
                </div>

            </div>
        </div>
    )
}

export default AllBooks