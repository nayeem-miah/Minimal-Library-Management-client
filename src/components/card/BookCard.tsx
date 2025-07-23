import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type { IBook } from "@/types"
import { Edit2, Trash2 } from "lucide-react";

interface BookCardProps {
    book: IBook
}

export function BookCard({ book }: BookCardProps) {
    console.log(book);

    return (
        <Card className="w-full  shadow-lg border rounded-xl">
            <CardHeader>
                <CardTitle className="text-xl font-bold">
                    The Theory of Everything
                </CardTitle>
                <CardDescription>
                    by Stephen Hawking
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                    Genre: <span className="font-medium">SCIENCE</span>
                </p>
                <p className="text-sm text-muted-foreground">
                    ISBN: <span className="font-mono">9780553380163</span>
                </p>
                <p className="text-sm">
                    An overview of cosmology and black holes.
                </p>
                <p className="text-sm">
                    Copies Available: <span className="font-semibold">{1}</span>
                </p>
                {/* <p className={`text-sm font-semibold ${true ? "text-green-600" : "text-red-600"}`}>
                    {true ? "Available" : "Not Available"}
                </p> */}
            </CardContent>

            <CardFooter className="flex justify-between gap-2 px-4 pb-4">
                <Button variant="outline">
                    <Edit2 className="h-4 w-4" />
                    Edit
                </Button>
                <Button variant="destructive">
                    <Trash2 className="h-4 w-4" />
                    Delete
                </Button>
                <Button>
                    Borrow Book
                </Button>
            </CardFooter>
        </Card>
    )
}
