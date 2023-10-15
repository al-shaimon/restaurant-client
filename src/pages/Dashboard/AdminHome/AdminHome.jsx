import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTruck, FaUsers, FaWallet } from 'react-icons/fa';
import { LuChefHat } from 'react-icons/lu';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure('/admin-stats');
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ['chart-data'],
    queryFn: async () => {
      const res = await axiosSecure('/order-stats');
      return res.data;
    },
  });

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${
      y + height
    }
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="m-4">
      <h2 className="text-3xl">Hi, {user.displayName}</h2>
      {/* stats */}
      <div className="text-white grid grid-cols-1 md:grid-cols-4">
        {/* Revenue */}
        <div
          className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-100
 flex items-center justify-center border rounded-lg w-full md:w-auto h-36 my-2 md:mr-2"
        >
          <div className="text-2xl pr-4">
            <FaWallet></FaWallet>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl leading-10 font-extrabold">${stats.revenue}</div>
            <div className="text-lg">Revenue</div>
          </div>
        </div>
        {/* Customers */}
        <div
          className="bg-gradient-to-r from-orange-400 to-amber-100
 flex items-center justify-center border rounded-lg w-full md:w-auto h-36 my-2 md:mr-2"
        >
          <div className="text-2xl pr-4">
            <FaUsers></FaUsers>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl leading-10 font-extrabold">{stats.users}</div>
            <div className="text-lg">Customers</div>
          </div>
        </div>
        {/* Menu Items */}
        <div
          className="bg-gradient-to-r from-pink-500 to-pink-200
 flex items-center justify-center border rounded-lg w-full md:w-auto h-36 my-2 md:mr-2"
        >
          <div className="text-2xl pr-4">
            <LuChefHat></LuChefHat>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl leading-10 font-extrabold">{stats.products}</div>
            <div className="text-lg">Menu Items</div>
          </div>
        </div>
        {/* Orders */}
        <div
          className="bg-gradient-to-r from-blue-400 to-sky-200
 flex items-center justify-center border rounded-lg w-full md:w-auto h-36 my-2"
        >
          <div className="text-2xl pr-4">
            <FaTruck></FaTruck>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl leading-10 font-extrabold">{stats.orders}</div>
            <div className="text-lg">Orders</div>
          </div>
        </div>
      </div>

      {/* graph */}
      <div className="grid grid-cols-1 md:flex">
        <div className="w-1/2">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 100,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
          {/* </ResponsiveContainer> */}
        </div>

        {/* Pie Chart */}
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Legend></Legend>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    name={entry.category}
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
