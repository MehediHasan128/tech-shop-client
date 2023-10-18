import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Home from "../Pages/Home/Home";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

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
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/addProduct',
                element: <PrivetRoute><AddProduct /></PrivetRoute>
            },
            {
                path: '/products/:brandName',
                element: <BrandProducts />,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
            },
            {
                path: '/product/:id',
                element: <PrivetRoute><ProductDetails /></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            }
        ]
    }
])


export default router;