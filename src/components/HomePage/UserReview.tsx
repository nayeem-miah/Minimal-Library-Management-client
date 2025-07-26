"use client";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAddReviewMutation } from "@/redux/api/baseApi";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AddReviewUser = () => {
    const form = useForm();
    const [open, setOpen] = useState(false);
    const { handleSubmit, control } = form;
    const [addReview] = useAddReviewMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await addReview(data).unwrap();
            if (res.success) {
                toast.success("✅ Review submitted successfully!", {
                    position: "top-right",
                    duration: 3000,
                });
                setOpen(false);
                form.reset();
            } else {
                toast.error("❌ Failed to submit review.", {
                    position: "top-right",
                    duration: 3000,
                });
                setOpen(false);
                form.reset();
            }
        } catch {
            toast.error("❌ Failed to submit review.", {
                position: "top-right",
                duration: 3000,
            });
            setOpen(false);
            form.reset();
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="border-pink-500 hover:border-pink-700 border-2" variant="outline">📋 Write a Review</Button>
            </DialogTrigger>

            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl">📋 Write a Review</DialogTitle>
                    <DialogDescription className="text-center">
                        Share your thoughts about our library system.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={control}
                            name="name"
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="comment"
                            rules={{ required: "Comment is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Comment</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Share your experience with our library system..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="rating"
                            rules={{ required: "Rating is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rating</FormLabel>
                                    <Select onValueChange={field.onChange} >
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Rate our system" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="5">⭐️⭐️⭐️⭐️⭐️ - Excellent</SelectItem>
                                            <SelectItem value="4">⭐️⭐️⭐️⭐️ - Good</SelectItem>
                                            <SelectItem value="3">⭐️⭐️⭐️ - Average</SelectItem>
                                            <SelectItem value="2">⭐️⭐️ - Poor</SelectItem>
                                            <SelectItem value="1">⭐️ - Very Bad</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />

                        <Button type="submit" variant={"outline"} className="w-full border-pink-500 hover:border-pink-700 border-2">
                            Submit Review
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddReviewUser;
