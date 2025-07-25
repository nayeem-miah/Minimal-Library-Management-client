
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


interface IdProps {
    id: string
}


const UpdateBookForm = ({ id }: IdProps) => {
    const form = useForm();

    // handle form submit
    const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);

        form.reset();
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className=" bg-pink-500 hover:bg-pink-600 text-white"
                >
                    <Edit className="h-3 w-2" />
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
                                        <Input placeholder="Book title" {...field}
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
                                        <Input placeholder="Book author" {...field} required={true} />
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
                                        <Input placeholder="Book description" {...field} required={true} />
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
                                            {...field} required={true}
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
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select genre" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Genres</SelectLabel>
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

                        <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                            update Book
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default UpdateBookForm;