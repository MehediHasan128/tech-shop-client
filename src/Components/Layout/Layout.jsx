import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;