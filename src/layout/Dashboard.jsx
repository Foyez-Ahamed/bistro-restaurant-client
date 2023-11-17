import { FaAd, FaHome } from "react-icons/fa";
import { FaBowlFood, FaCalendar, FaCartShopping, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>

            <section className="flex justify-center gap-6">
                <div className="w-64 min-h-screen bg-orange-500">
                    <ul className="menu space-y-2 font-bold">

                        <li><NavLink to='/dashboard/cart'> <FaCartShopping></FaCartShopping> My Cart</NavLink></li>

                        <li><NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink></li>

                        <li><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink></li>

                        <li><NavLink to='/dashboard/review'> <FaAd></FaAd> Review</NavLink></li>

                        <li><NavLink to='/dashboard/bookings'> <FaList></FaList> My Bookings</NavLink></li>

                        <div className="divider text-white"></div>

                        <li><NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>

                        <li><NavLink to='/menu'> <FaBowlFood></FaBowlFood>Menu</NavLink></li>

                    </ul>
                </div>

                <div className="flex-1 mt-3">
                    <Outlet></Outlet>
                </div>
            </section>
            
        </div>
    );
};

export default Dashboard;