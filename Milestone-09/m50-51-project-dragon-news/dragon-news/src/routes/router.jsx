import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/category/:id",
                element: <CategoryNews/>,
                loader: ()=>fetch('/news.json'),
                hydrateFallbackElement: <p>loading...</p>
            },
        ]
    },
    {
        path: "/auth",
        element: <h1>Authentication layout</h1>

    },
    {
        path: "/news",
        element: <h1>News layout</h1>

    },
    {
        path: "/*",
        element: <h1>Error404</h1>

    }
])

export default router;