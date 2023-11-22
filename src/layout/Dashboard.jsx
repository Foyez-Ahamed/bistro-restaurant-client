import { FaAd, FaHome, FaUserShield, FaUtensils } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import {
  FaBowlFood,
  FaCalendar,
  FaCartShopping,
  FaList,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
// import useCart from "../hooks/useCart";

const Dashboard = () => {
  //   const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="lg:w-64 min-h-screen bg-[#BB8506]">
          <ul className="menu space-y-2 font-bold">
            { isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    {" "}
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/addItems">
                    {" "}
                    <FaUtensils></FaUtensils> Add Items
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/manageItems">
                    {" "}
                    <FaList></FaList> Manage Items
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/manageBookings">
                    {" "}
                    <TbBrandBooking></TbBrandBooking> Manage Bookings
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/allUsers">
                    {" "}
                    <FaUserShield></FaUserShield> All Users
                  </NavLink>
                </li>
              </>
            ) : (

              <>
                <li>
                  <NavLink to="/dashboard/cart">
                    {" "}
                    <FaCartShopping></FaCartShopping> My Cart
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/userHome">
                    {" "}
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/reservation">
                    {" "}
                    <FaCalendar></FaCalendar> Reservation
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/review">
                    {" "}
                    <FaAd></FaAd> Review
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/bookings">
                    {" "}
                    <FaList></FaList> My Bookings
                  </NavLink>
                </li>
              </>
            )}

            {/* shared nav links */}
            <div className="divider text-white"></div>

            <li>
              <NavLink to="/">
                {" "}
                <FaHome></FaHome>Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/menu">
                {" "}
                <FaBowlFood></FaBowlFood>Menu
              </NavLink>
            </li>

            <li>
              <NavLink to="/menu">
                {" "}
                <MdOutlineMail></MdOutlineMail> Contact
              </NavLink>
            </li>
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
