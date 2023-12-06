import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import logo from "../../../assets/logo/meta_logo-removebg-preview.png"

const Navbar = () => {
  const { user, userLogout } = useAuth();

  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success("User logged out successfully");
      })
      .catch();
  };

  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#EEFF25]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px]  font-medium ">HOME</li>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#EEFF25] " : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4">CONTACT US</li>
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#EEFF25]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium  ml-4">OUR MENU</li>
      </NavLink>

      <NavLink
        to="/order/SALAD"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#EEFF25]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4">ORDERS</li>
      </NavLink>


      {
        user && isAdmin && <NavLink
        to="/dashboard/adminHome"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#EEFF25]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] uppercase font-medium ml-4">Dashboard</li>
      </NavLink>
      }

      {
        user && !isAdmin && <NavLink
        to="/dashboard/userHome"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#EEFF25]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] uppercase font-medium ml-4">Dashboard</li>
      </NavLink>
      }

    </>
  );

  return (
    <div>
      <div className="navbar rounded-md fixed bg-zinc-900 bg-opacity-30 z-10 text-white w-[410px] md:w-[688px] lg:w-[1102px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4 font-medium text-black"
            >
              {navItems}
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <Link to="/">
              <a className="cursor-pointer">
                {/* <h1 className=" text-[12px] lg:text-xl font-bold">
                  BISTRO BOSS <br />
                  <span className="lg:text-[16px] tracking-widest ">
                    Restaurant
                  </span>
                </h1> */}

                <img src={logo} className="w-[150px] h-[50px] object-cover"  alt="logo" />
              </a>
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        

        <div className="navbar-end">
          <div className="mr-4">
            {/* to='/dashboard/cart' */}
             <Link> 
             <button className="flex">
               <FaCartShopping className="text-2xl"></FaCartShopping>
              <div className="badge bg-[#EEFF25] font-bold -mt-3">+{cart.length}</div>
            </button>
             </Link>
          </div>

          <div>
            {user?.email ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-black bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">{user.displayName}</a>
                    </li>
                    <li>
                      <a>{user.email}</a>
                    </li>
                    <li>
                      <a onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isActive ? "text-[#EEFF25]" : isPending ? "pending" : ""
                }
              >
                <button className="text-[16px] font-medium">SIGN IN</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//
{
  /* <div className="navbar-end dark:text-black">
  {user?.email ? (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user.photoURL} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">{user.displayName}</a>
          </li>
          <li>
            <a>{user.email}</a>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </>
  ) : (
    <Link to="/login">
      {" "}
      <button className="text-[16px] font-medium bg-[#0087EB] hover:bg-gray-700  text-white px-4 py-1 lg:py-2 rounded-md">
        Login
      </button>
    </Link>
  )}
</div>; */
}
//
