import MainLayout from "@/Layout/MainLayout";
import AddBooks from "@/pages/AddBooks";
import AllBooks from "@/pages/AllBooks";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "all-books",
                element: <AllBooks />
            },
            {
                path: "add-books",
                element: <AddBooks />
            },
            {
                path: "borrow-summary",
                element: <BorrowSummary />
            }
        ]
    }
])


export default router;