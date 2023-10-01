import { NavLink, Outlet } from 'react-router-dom';
import {
  FaBars,
  FaCalendar,
  FaCalendarAlt,
  FaComments,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from 'react-icons/fa';
import useCart from '../hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content font-cinzel font-bold uppercase">
          {/* Sidebar content here */}

          {/* title section */}
          <li className="mb-14">
            <h2 className="font-black text-2xl">Bistro Boss</h2>
            <p className="tracking-[0.35rem] text-lg leading-none font-bold pt-0">Restaurant</p>
          </li>
          <li>
            <NavLink to="/dashboard/home">
              <FaHome className="text-2xl"></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt className="text-2xl"></FaCalendarAlt>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet className="text-2xl"></FaWallet>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink className="flex" to="/dashboard/mycart">
              <FaShoppingCart className="text-2xl"></FaShoppingCart>
              <span className="">My cart</span>
              <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaComments className="text-2xl"></FaComments>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaCalendar className="text-2xl"></FaCalendar>
              My Booking
            </NavLink>
          </li>

          <div className="divider mx-2 bg-white h-0.5 my-6"></div>

          <li>
            <NavLink to="/">
              <FaHome className="text-2xl"></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars className="text-2xl"></FaBars>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag className="text-2xl"></FaShoppingBag>
              Order Food
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaEnvelope className="text-2xl"></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
