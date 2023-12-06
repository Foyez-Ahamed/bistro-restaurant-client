import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaProductHunt, FaRegCreditCard } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const AdminHome = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/v1/adminStats");
      return res.data;
    },
  });

  console.log(stats);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-medium italic">
          {" "}
          <span>
            Hi, Welcome {user?.displayName ? user.displayName : "Back"}
          </span>
          !{" "}
        </h1>
      </div>

      <div className="stats shadow mt-8 ">

        <div className="stat bg-[#BB34F5] text-white">
          <div className="stat-figure">
            <FaRegCreditCard className="text-3xl"></FaRegCreditCard>
          </div>
          <div className="stat-title text-white">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
        </div>

        <div className="stat bg-[#D3A256] text-white">
          <div className="stat-figure text-secondary">
          <FaPeopleGroup className="text-3xl text-white" />
          </div>
          <div className="stat-title text-white">Customers</div>
          <div className="stat-value">{stats.users}</div>
        </div>

        <div className="stat bg-[#FE4880]">
          <div className="stat-figure text-secondary">
           <FaProductHunt className="text-3xl text-white"></FaProductHunt>
          </div>
          <div className="stat-title text-white">Products</div>
          <div className="stat-value text-white">{stats.menuItems}</div>
        </div>


        <div className="stat bg-[#6AAEFF]">
          <div className="stat-figure text-secondary">
           <FaProductHunt className="text-3xl text-white"></FaProductHunt>
          </div>
          <div className="stat-title text-white">Order</div>
          <div className="stat-value text-white">{stats.orders}</div>
        </div>
      </div>
      
    </div>
  );
};

export default AdminHome;
