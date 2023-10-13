import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, image, email: user.email, price };
      fetch('https://restaurant-server-seven.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart.',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <p
        className="absolute right-0 mr-4 mt-4 p-4 bg-slate-900
       rounded-lg text-white font-semibold"
      >
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-justify">{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-[#E8E8E8] hover:text-[#BB8506] border-0 border-b-2 mt-2 mx-auto text-[#BB8506]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
