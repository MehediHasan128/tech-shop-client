import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Home from "../Pages/Home/Home";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/addProduct',
                element: <AddProduct />
            },
            {
                path: '/products/:brandName',
                element: <BrandProducts />,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
            }
        ]
    }
])


export default router;