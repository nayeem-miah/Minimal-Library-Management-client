import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { IBook } from "@/types";
import { Trash2 } from "lucide-react";
import Loader from "../Loader";
import { toast } from "sonner";
import BorrowForm from "../borrow/borrowForm";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import UpdateBookForm from "../updateBook/updateBookForm";

interface BookCardProps {
    book: IBook;
}

export function BookCard({ book }: BookCardProps) {
    const [deleteBook, { isLoading }] = useDeleteBookMutation();

    // Function to handle book deletion
    const handleDelete = async (id: string) => {
        toast.warning('Are you sure you want to delete this book?', {
            description: 'This action cannot be undone.',
            action: {
                label: 'Yes, Delete',
                onClick: async () => {
                    try {
                        await deleteBook(id).unwrap();
                        toast.success('✅ Book deleted successfully!', {
                            position: "top-right",
                            duration: 6000,
                        });
                    } catch {
                        toast.error('❌ Failed to delete Book!', {
                            position: "top-right",
                            duration: 6000
                        });
                    }
                },

            },
            cancel: {
                label: 'Cancel',
                onClick: () => {
                    toast.info('Task deletion cancelled.', {
                        position: "top-right",
                        duration: 6000
                    });
                },
            },
            position: "top-right",
            duration: 6000,
        });
    }

    if (isLoading) return <Loader />

    return (
        <Card className="w-full max-w-sm shadow-lg border rounded-xl hover:shadow-xl transition">
            <CardHeader>
                <CardTitle className="text-xl font-bold">{book.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                    by {book.author || "Unknown Author"}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Genre:</span> {book.genre}
                </p>
                <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">ISBN:</span>{" "}
                    <span className="font-mono">{book.isbn}</span>
                </p>
                <p className="text-sm">{book.description || "No description available."}</p>
                <p className="text-sm">
                    <span className="font-semibold">Copies Available:</span>{" "}
                    {book.copies}
                </p>
                <p
                    className={`text-sm font-semibold ${book.available ? "text-green-600" : "text-red-600"
                        }`}
                >
                    {book.available ? "Available" : "Not Available"}
                </p>
            </CardContent>

            <CardFooter className="flex flex-wrap justify-between items-center gap-2 px-4 pb-4">
                {/* update button */}
                <UpdateBookForm id={book._id} />
                <Button onClick={() => handleDelete(book._id)} variant="destructive" className="flex items-center gap-1">
                    <Trash2 className="h-4 w-4" />
                    Delete
                </Button>

                {/* borrow button */}
                <BorrowForm id={book._id} />
            </CardFooter>
        </Card>
    );
}
