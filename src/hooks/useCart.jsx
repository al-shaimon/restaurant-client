import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

// HOOK USING TANKSTACK QUERY

const useCart = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log('res from axios', res);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;

// queryFn: async () => {
//   const res = await fetch(`https://restaurant-server-seven.vercel.app/carts?email=${user?.email}`, {
//     headers: {
//       authorization: `bearer ${token}`,
//     },
//   });
//   return res.json();
// },
