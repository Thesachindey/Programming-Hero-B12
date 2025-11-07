import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/Signin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path:'/about-us',
                element: <AboutUs/>
            },
            {
                path:'/profile',
                element:<Profile/>,
            }
            ,
            {
                path:'/signup',
                element:<SignUp/>,
            }
            ,
            {
                path:'/signin',
                element:<SignIn/>,
            }
            ,
        ]
    },
]);

export default router;