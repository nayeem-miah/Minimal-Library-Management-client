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
import { Edit2, Trash2 } from "lucide-react";

interface BookCardProps {
    book: IBook;
}

export function BookCard({ book }: BookCardProps) {
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
                <Button variant="outline" className="flex items-center gap-1">
                    <Edit2 className="h-4 w-4" />
                    Edit
                </Button>

                <Button variant="destructive" className="flex items-center gap-1">
                    <Trash2 className="h-4 w-4" />
                    Delete
                </Button>

                <Button disabled={!book.available} className="flex-grow">
                    Borrow Book
                </Button>
            </CardFooter>
        </Card>
    );
}
