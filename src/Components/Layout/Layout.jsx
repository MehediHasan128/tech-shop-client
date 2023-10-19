import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;