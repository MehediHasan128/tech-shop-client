import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Home from "../Pages/Home/Home";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://tech-shop-server-q92m3tttj-mehedihasan128.vercel.app/products')
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
                path: '/myCart',
                element: <PrivetRoute><Cart /></PrivetRoute>,
                loader: () => fetch('https://tech-shop-server-q92m3tttj-mehedihasan128.vercel.app/cart')
            },
            {
                path: '/products/:brandName',
                element: <BrandProducts />,
                loader: ({params}) => fetch(`https://tech-shop-server-q92m3tttj-mehedihasan128.vercel.app/products/${params.brandName}`)
            },
            {
                path: '/product/:id',
                element: <PrivetRoute><ProductDetails /></PrivetRoute>,
                loader: ({params}) => fetch(`https://tech-shop-server-q92m3tttj-mehedihasan128.vercel.app/product/${params.id}`)
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct />,
                loader: ({params}) => fetch(`https://tech-shop-server-q92m3tttj-mehedihasan128.vercel.app/cart/${params.id}`)
            }
        ]
    }
])


export default router;