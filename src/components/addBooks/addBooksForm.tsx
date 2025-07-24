import { CgAdd } from "react-icons/cg";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "../ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { useAddBookMutation } from "@/redux/api/baseApi";
import Loader from "../loader";


export function AddBooksForm() {
    const form = useForm();
    const [addBooks, { isLoading, isError }] = useAddBookMutation()

    // handle form submit
    const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
        await addBooks(data)

    }


    if (isLoading) return <Loader />

    if (isError) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h3 className="text-red-500 text-2xl">Error add book</h3>
            </div>
        )
    }
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="secondary" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                        <CgAdd className="h-4 w-4" />
                        Add Book</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Books</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="book title" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="author"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>author</FormLabel>
                                        <FormControl>
                                            <Input placeholder="book author" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>description</FormLabel>
                                        <FormControl>
                                            <Input placeholder="book description" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}

                                name="copies"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>copies</FormLabel>
                                        <FormControl>
                                            <Input placeholder="book copies"
                                                type="number"
                                                min={0}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="genre"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="select genre books" />
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
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </DialogContent>
            </form>
        </Dialog>
    )
}
