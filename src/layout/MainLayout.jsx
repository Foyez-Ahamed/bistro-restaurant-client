import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    
    const location = useLocation();
    
    const isLogin = location.pathname.includes('login') || location.pathname.includes('signUp');

    return (
        <div>
            { isLogin || <Navbar></Navbar> }
            <Outlet></Outlet>
            <div className="mt-10">
            { isLogin || <Footer></Footer> }
            </div>

            <Toaster/>
        </div>
    );
};

export default MainLayout;