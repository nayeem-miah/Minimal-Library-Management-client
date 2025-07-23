import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"

function MainLayout() {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            <div className="md:min-h-[calc(100vh-297px)] lg:min-h-[calc(100vh-300px)] min-h-[calc(100vh-440px)]  max-w-7xl mx-auto px-2 md:px-3 lg:px-4 mb-2 md:mb-7 lg:mb-9">
                <Outlet />
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default MainLayout