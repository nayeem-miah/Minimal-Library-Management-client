import Banner from "@/components/HomePage/Banner"
import RecentBook from "@/components/HomePage/RecentBook"
import UserReviews from "@/components/HomePage/UserReview"

function Home() {
    return (
        <div >
            <Banner />
            <RecentBook />
            <UserReviews />
        </div>
    )
}

export default Home