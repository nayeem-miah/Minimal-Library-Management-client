import Banner from "@/components/HomePage/Banner"
import RecentBook from "@/components/HomePage/RecentBook"
import ShowUserReview from "@/components/HomePage/ShowUserReview"

function Home() {
    return (
        <div >
            <Banner />
            <RecentBook />
            <div className="">
                <ShowUserReview />
            </div>
        </div>
    )
}

export default Home