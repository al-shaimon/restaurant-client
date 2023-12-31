import { NavLink, Outlet } from 'react-router-dom';
import {
  FaBars,
  FaBook,
  FaCalendar,
  FaCalendarAlt,
  FaComments,
  FaEnvelope,
  FaHome,
  FaListUl,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaWallet,
} from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
import { FaMessage } from 'react-icons/fa6';

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open font-inter text-black">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Outlet></Outlet>
        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-square btn-ghost lg:hidden fixed top-0 left-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side -mt-4">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 md:w-80 min-h-full font-cinzel font-bold uppercase bg-[#D1A054] text-black">
          {/* Sidebar content here */}

          {/* title section */}
          <div className="mb-10 ml-4">
            <h2 className="flex flex-col items-start font-black text-2xl">
              Bistro Boss{' '}
              <span className="tracking-[0.35rem] text-lg leading-none font-bold pt-0">
                Restaurant
              </span>
            </h2>
          </div>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome className="text-2xl"></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <ImSpoonKnife className="text-2xl"></ImSpoonKnife>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaListUl className="text-2xl"></FaListUl>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink className="flex" to="/dashboard/manageBookings">
                  <FaBook className="text-2xl"></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers className="text-2xl"></FaUsers>
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/contact">
                  <FaMessage className="text-2xl"></FaMessage>
                  Messages
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
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
            </>
          )}

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
            <NavLink to="/contact-us">
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
