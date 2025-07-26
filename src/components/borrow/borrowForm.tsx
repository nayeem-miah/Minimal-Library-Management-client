import { CgAdd } from "react-icons/cg";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import {
    useForm,
    type FieldValues,
    type SubmitHandler,
} from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import Loader from "../Loader";

interface IdProps {
    id: string
}

const BorrowForm = ({ id }: IdProps) => {
    const form = useForm();
    const [borrowBook, { isLoading, }] = useBorrowBookMutation();

    // handle form submit
    const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const newData = {
                book: id,
                quantity: data.quantity,
                dueDate: data.dueDate,
            }
            const res = await borrowBook(newData).unwrap();
            if (res.data) {
                toast.success(`borrow book success ✅`, {
                    position: "top-right"
                })
            } else {
                toast.error(`${res.error.data.error} ❌`, {
                    position: "top-right",
                })
            }
            form.reset();
        } catch (error) {
            console.error("Error borrowing book:", error);
            toast.error('❌ Failed to borrow book!', {
                position: "top-right",
            }
            )
        }
    }

    if (isLoading) return <Loader />;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="border-pink-500 flex-grow hover:border-pink-700 border"
                >
                    <CgAdd className="h-4 w-4 mr-1" />
                    Borrow Book
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Borrow Book</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleOnSubmit)}
                        className="space-y-6 mt-4"
                    >
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>quantity</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Book quantity"
                                            type="number"
                                            min={0}
                                            {...field} required={true}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {/* calender */}
                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormLabel>Due Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                required={true}
                                                disabled={(date) =>
                                                    date < new Date()
                                                }
                                                captionLayout="dropdown"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}
                        />


                        <Button variant="outline" type="submit" className="w-full  border-pink-500 hover:border-pink-700 border-2">
                            Submit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default BorrowForm;