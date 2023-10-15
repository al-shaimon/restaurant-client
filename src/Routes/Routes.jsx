import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../pages/Shared/Secret/Secret';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../pages/Dashboard/MyCart/MyCart';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import AddItem from '../pages/Dashboard/AddItem/AddItem';
import AdminRoute from './AdminRoute';
import ManageItems from '../pages/Dashboard/ManageItems/ManageItems';
import Payment from '../pages/Dashboard/Payment/Payment';
import UserHome from '../pages/Dashboard/UserHome/UserHome';
import AdminHome from '../pages/Dashboard/AdminHome/AdminHome';
import ContactUs from '../pages/ContactUs/ContactUs';
import Message from '../pages/Dashboard/Message/Message';
import Reservation from '../pages/Dashboard/Reservation/Reservation';
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory';
import MyBooking from '../pages/Dashboard/MyBooking/MyBooking';
import AddReview from '../pages/Dashboard/AddReview/AddReview';
import ManageBookings from '../pages/Dashboard/ManageBookings/ManageBookings';
import PageNotFound from '../pages/404Page/PageNotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'menu',
        element: <Menu></Menu>,
      },
      {
        path: 'order/:category',
        element: <Order></Order>,
      },
      {
        path: 'contact-us',
        element: <ContactUs></ContactUs>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: 'secret',
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>,
      },
      {
        path: 'mycart',
        element: <MyCart></MyCart>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>,
      },
      {
        path: 'reservation',
        element: <Reservation></Reservation>,
      },
      {
        path: 'history',
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: 'review',
        element: <AddReview></AddReview>,
      },
      {
        path: 'booking',
        element: <MyBooking></MyBooking>,
      },
      // Admin Routes
      {
        path: 'adminhome',
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: 'allusers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: 'addItem',
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: 'manageitems',
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: 'manageBookings',
        element: (
          <AdminRoute>
            <ManageBookings></ManageBookings>
          </AdminRoute>
        ),
      },
      {
        path: 'contact',
        element: (
          <AdminRoute>
            <Message></Message>
          </AdminRoute>
        ),
      },
      {
        path: '*',
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);
