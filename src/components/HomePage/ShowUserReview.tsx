import { useGetReviewsQuery } from "@/redux/api/baseApi";
import Loader from "../Loader";
import ReviewCard from "./ReviewCard";
import type { IUerReview } from "@/types";
import AddReviewUser from "./UserReview";

function ShowUserReview() {
    const { data, isLoading } = useGetReviewsQuery(undefined, {
        pollingInterval: 5000,
        refetchOnFocus: true,
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) return <Loader />;

    return (
        <section className=" py-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary">User Reviews</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                    Hear what our readers are saying about our library experience.
                </p>
                <div className="mt-6">
                    <AddReviewUser />
                </div>
            </div>

            {data?.data?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.data.map((review: IUerReview) => (
                        <ReviewCard key={review._id} review={review} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-muted-foreground">
                    No reviews available at the moment.
                </p>
            )}
        </section>
    );
}

export default ShowUserReview;
