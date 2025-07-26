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

const AddReviewModal = () => {
    const form = useForm();
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
            } else {
                toast.error("❌ Failed to submit review.", {
                    position: "top-right",
                    duration: 3000,
                });
            }
        } catch {
            toast.error("❌ Failed to submit review.", {
                position: "top-right",
                duration: 3000,
            });
        }
        form.reset();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">📋 Write a Review</Button>
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
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
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

                        <Button type="submit" className="w-full">
                            Submit Review
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddReviewModal;
