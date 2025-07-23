import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"

function MainLayout() {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            <div className="min-h-[calc(100vh-107px)] max-w-7xl mx-auto px-2 md:px-3 lg:px-4">
                <Outlet />
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default MainLayout