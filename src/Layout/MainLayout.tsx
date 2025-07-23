import { Outlet } from "react-router"

function MainLayout() {
    return (
        <div>
            {/* navbar */}
            <p>navbar</p>
            <Outlet />
            {/* footer */}
            <p>footer</p>
        </div>
    )
}

export default MainLayout