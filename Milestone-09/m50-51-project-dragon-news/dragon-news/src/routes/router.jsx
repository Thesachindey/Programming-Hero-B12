import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeLayouts/>

    },
    {
        path:"/auth",
        element:<h1>Authentication layout</h1>

    },
    {
        path:"/news",
        element:<h1>News layout</h1>

    },
    {
        path:"/*",
        element:<h1>Error404</h1>

    }
])

export default router;