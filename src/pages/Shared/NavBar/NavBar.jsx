import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</NavLink>
        </li>
      ) : (
        <></>
      )}
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/mycart">
          <div className="flex items-center gap-2">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </div>
        </NavLink>
      </li>

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav
      id="nav-bar"
      className="navbar fixed z-10 bg-[#15151580] text-white max-w-screen-xl py-0 pr-5"
    >
      <div className="navbar">
        {/* <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl"> */}
        <div className="navbar-start">
          <div className="dropdown">
            {user?.photoURL ? (
              <label tabIndex={0} className="cursor-pointer mr-2 lg:hidden avatar">
                <div className="w-6 rounded-full ring">
                  <img src={user?.photoURL} alt="user" />
                </div>
              </label>
            ) : (
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            )}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-opacity-60 bg-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <NavLink to="/" className="font-cinzel">
            <h2 className="font-black text-sm md:text-2xl text-white">Bistro Boss</h2>
            <p className="md:tracking-[0.35rem] tracking-widest text-xs md:text-lg leading-none font-bold pt-0 text-white">
              Restaurant
            </p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">{navOptions}</ul>
        </div>
      </div>
      {user?.photoURL ? (
        <div className="avatar hidden lg:flex">
          <div className="w-12 rounded-full ring">
            <img src={user?.photoURL} alt="user" />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="lg:hidden">
        <NavLink to="/dashboard/mycart">
          <div className="flex items-center gap-2">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
