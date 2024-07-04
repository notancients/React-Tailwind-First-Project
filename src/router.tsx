import { createBrowserRouter } from "react-router-dom";
import Homepage from "./screens/homepage";
import LoginSignup from "./screens/login_signup";
import Landing from "./screens/landing";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>,
    },
    {
        path: "login",
        element: <LoginSignup/>
    },
    {
        path: "homepage",
        element: <Homepage/>
    },
    {
        path: "landing",
        element: <Landing/>
    },
    {
        path: "friendlist",
        element: <LoginSignup/>
    },
])

export default router;