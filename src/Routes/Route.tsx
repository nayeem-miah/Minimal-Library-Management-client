import MainLayout from "@/Layout/MainLayout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <div>Home Page</div>
            }
        ]
    }
])


export default router;