import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://restaurant-server-production-75a3.up.railway.app/carts/${item._id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
          });
      }
    });
  };

  return (
    <div className="w-full font-cinzel px-2">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTitle
        className="font-medium text-black"
        heading="WANNA ADD MORE?"
        subHeading="My Cart"
      ></SectionTitle>
      <div className="bg-white">
        <div className="text-xl uppercase font-bold flex justify-evenly items-center px-4 h-20">
          <h3>Total Items: {cart.length}</h3>
          <h3>Total Price: ${total}</h3>
          <Link to="/dashboard/payment">
            <button className="btn bg-[#D1A054] btn-sm text-white">PAY</button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-t-xl">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn bg-[#B91C1C] text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
