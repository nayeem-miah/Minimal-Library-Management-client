
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Edit } from "lucide-react";
import { useGetSingleBookQuery, useUpdateBookMutation } from "@/redux/api/baseApi";
import Loader from "../Loader";
import { toast } from "sonner";


interface IdProps {
    id: string
}


const UpdateBookForm = ({ id }: IdProps) => {
    const form = useForm();

    const { data } = useGetSingleBookQuery(id, {
        pollingInterval: 50000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    });

    const [updateBook, {
        isLoading
    }] = useUpdateBookMutation();

    // handle form submit
    const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
        const formData = {
            ...data,
            available: data.copies > 0
        }
        const res = await updateBook({ id, formData }).unwrap();
        try {
            if (res.data.success) {
                toast.success(res.data.message, {
                    position: "top-right",
                    duration: 3000,
                });
            }
        } catch (error) {
            console.error("Error updating book:", error);
            toast.error(res.data.message || "Failed to update book", {
                position: "top-right",
                duration: 3000,
            });
        }
        form.reset();
    };

    if (isLoading) return <Loader />
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="border-pink-500 hover:border-pink-700 border-2"
                >
                    <Edit className="h-3 w-2 " />
                    edit Book
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Book</DialogTitle>
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
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Book title"
                                            {...field}
                                            defaultValue={data?.data?.title}
                                            required={true} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Book author"
                                            {...field}
                                            required={true}
                                            defaultValue={data?.data?.author} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Book description" {...field}
                                            required={true}
                                            defaultValue={data?.data?.description}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Copies</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Book copies"
                                            type="number"
                                            min={0}
                                            {...field}
                                            required={true}
                                            defaultValue={data?.data?.copies}
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
                                    <FormLabel>Genre</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={data?.data?.genre}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue
                                                    placeholder="Select genre" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel >Genres</SelectLabel>
                                                    <SelectItem value="FICTION">FICTION</SelectItem>
                                                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                                                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <Button variant="outline" type="submit" className="w-full border-pink-500 hover:border-pink-700 border-2">
                            update Book
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default UpdateBookForm;