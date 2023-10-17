import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SignIn from "../Pages/Authentication/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/signIn',
                element: <SignIn />
            }
        ]
    }
])


export default router;