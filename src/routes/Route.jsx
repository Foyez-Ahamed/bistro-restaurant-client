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

const Route = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout></MainLayout>,
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
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'cart',
                element:<Cart></Cart>
            }
        ]
    }

])

export default Route;