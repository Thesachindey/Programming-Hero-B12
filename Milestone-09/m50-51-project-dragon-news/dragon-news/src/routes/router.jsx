import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayouts from "../layouts/AuthLayouts";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import LoadingPage from "../pages/LoadingPage";

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
                element: <CategoryNews />,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <LoadingPage/>
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayouts />,
        children: [
            {
                path: '/auth/login',
                element: <LoginPage />
            },
            {
                path: '/auth/register',
                element: <RegisterPage />
            }
        ]

    },
    {
        path: "/news-details/:id",
        element: <PrivateRoute>
            <NewsDetails />
        </PrivateRoute>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <LoadingPage />
    },
    {
        path: "/*",
        element: <h1>Error404</h1>

    }
])

export default router;