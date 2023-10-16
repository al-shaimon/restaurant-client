import { useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';

const useMenu = () => {
  // USING REACT useState and useEffect

  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch('https://restaurant-server-production-75a3.up.railway.app/menu')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);

  // USING TANKSTACK QUERY

  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch('https://restaurant-server-production-75a3.up.railway.app/menu');
      return res.json();
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
