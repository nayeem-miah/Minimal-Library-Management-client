import { BookCard } from "@/components/card/BookCard";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/baseApi"
import type { IBook } from "@/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import Loader from "@/components/Loader";



function AllBooks() {
    const [genre, setGenre] = useState("");

    // get all books from the database
    const { data, isLoading, isError } = useGetBooksQuery(genre);
    // console.log({ data, isLoading, isError });

    if (isLoading) return <Loader />

    if (isError) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h3 className="text-red-500 text-2xl">Error fetching books</h3>
            </div>
        )
    }

    return (
        <div>
            <div>
                <div className="flex justify-between mb-8 mt-1">
                    <h3 className="text-2xl font-semibold">Show all books</h3>
                    {/* filtering  genre value */}
                    <div>
                        <Select onValueChange={(value) => setGenre(value)} defaultValue={genre}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="filter genre books" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>genre</SelectLabel>
                                    <SelectItem value="FICTION">FICTION</SelectItem>
                                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* show books */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        !isLoading && !isError && data?.data?.length > 0 && (
                            data.data.map((book: IBook) => (
                                <BookCard key={book._id} book={book} />
                            ))
                        )
                    }
                </div>

                {/* not found book */}
                {
                    data?.data?.length === 0 && (
                        <div className="flex flex-col items-center justify-center text-center py-20">
                            <h3 className="text-xl text-red-500 font-semibold mb-2">No books available</h3>
                            <p className="text-gray-500 mb-4">There are currently no books in the library. </p>
                            <Button onClick={() => window.location.href = "/add-books"} className="bg-pink-600 text-white">
                                Add New Book
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AllBooks;
