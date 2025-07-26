import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import type { IUerReview } from "@/types";

interface ReviewCardProps {
    review: IUerReview;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
    const { name, comment, rating } = review;

    return (
        <Card className="">
            <CardHeader className="flex flex-row  gap-4 ">
                <Avatar className="h-12 w-12">
                    <AvatarFallback className="">{name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-1">
                    <CardTitle className="text-base font-semibold">{name}</CardTitle>
                    <Badge variant="secondary" className="inline-flex items-center gap-1 text-xs px-2 py-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium">{rating}/5</span>
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="pt-3">
                <p className="text-sm ">
                    “{comment}”
                </p>
            </CardContent>
        </Card>
    );
};

export default ReviewCard;
