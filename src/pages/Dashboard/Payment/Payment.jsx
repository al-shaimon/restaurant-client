import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl uppercase text-center">Payment</h2>
      <Elements stripe={stripePromise}>
        <div className="w-full flex items-center justify-center">
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
        </div>
      </Elements>
    </div>
  );
};

export default Payment;
