import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"

function MainLayout() {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            <Outlet />
            {/* footer */}
            <Footer />
        </div>
    )
}

export default MainLayout