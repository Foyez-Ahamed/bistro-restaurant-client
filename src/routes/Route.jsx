import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ContactUs from "../pages/ContactUs/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Route = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },

            {
                path:'/menu',
                element:<Menu></Menu>
            },

            {
                path:'/order/:category',
                element: <Order></Order>
            },

            {
                path : '/contact',
                element : <ContactUs></ContactUs>
            },

            {
                path:'/login',
                element:<Login></Login>
            },

            {
                path:'/signUp',
                element: <SignUp></SignUp>
            },

            {
                path:'/secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },

    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            // normal user // 
            {
                path:'cart',
                element:<Cart></Cart>
            },

            {
                path:'userHome',
                element:<UserHome></UserHome>
            },

            {
                path:'payment',
                element: <Payment></Payment>
            },

            {
                path:'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            
            // admin users // 
            {
                path:'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },

            {
                path:'allUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },

            {
                path:'addItems',
                element:<AdminRoute><AddItems></AddItems></AdminRoute>
            },

            {
                path:'manageItems',
                element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
            },

            {
                path:'updateItems/:id',
                element: <AdminRoute> <UpdateItems> </UpdateItems> </AdminRoute>,
                loader:({params}) => fetch(`http://localhost:5000/api/v1/getSingleMenu/${params.id}`)
            }
        ]
    }

])

export default Route;