import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaProductHunt, FaRegCreditCard } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF804f'];

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

  const { data: orderStats = [] } = useQuery({
    queryKey: ["orderStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/v1/order-stats");
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  // for pie chart // 
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = orderStats.map(data => {
    return { name : data.category , value : data.revenue }
  })


  return (
    <div>
      <div>
        <h1 className="text-3xl font-medium">
          {" "}
          <span>
            Hi, {user?.displayName ? user.displayName : " Welcome Back"}
          </span>
          !{" "}
        </h1>
      </div>

      <div className="stats shadow mt-8 flex flex-col lg:flex-row gap-4">
        <div className="stat bg-[#BB34F5] text-white">
          <div className="stat-figure">
            <FaRegCreditCard className="text-3xl"></FaRegCreditCard>
          </div>
          <div className="stat-title text-white font-bold">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
        </div>

        <div className="stat bg-[#D3A256] text-white">
          <div className="stat-figure text-secondary">
            <FaPeopleGroup className="text-3xl text-white" />
          </div>
          <div className="stat-title text-white font-bold">Customers</div>
          <div className="stat-value">{stats.users}</div>
        </div>

        <div className="stat bg-[#FE4880]">
          <div className="stat-figure text-secondary">
            <FaProductHunt className="text-3xl text-white"></FaProductHunt>
          </div>
          <div className="stat-title text-white font-bold">Products</div>
          <div className="stat-value text-white">{stats.menuItems}</div>
        </div>

        <div className="stat bg-[#6AAEFF]">
          <div className="stat-figure text-secondary">
            <FaProductHunt className="text-3xl text-white"></FaProductHunt>
          </div>
          <div className="stat-title text-white font-bold">Order</div>
          <div className="stat-value text-white">{stats.orders}</div>
        </div>
      </div>

      <div className="flex justify-between gap-4 mt-10">
        <div className="flex-1">
          <BarChart
            width={450}
            height={300}
            data={orderStats}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {orderStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((data, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
      </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
