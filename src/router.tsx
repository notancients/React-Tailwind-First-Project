import { createBrowserRouter } from "react-router-dom";
import Homepage from "./screens/homepage";
import Login from "./screens/login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
    },
    {
        path: "login",
        element: <Login/>
    }
])

export default router;