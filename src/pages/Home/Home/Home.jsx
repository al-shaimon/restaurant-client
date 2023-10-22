import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import CallUs from '../CallUs/CallUs';
import Category from '../Category/Category';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import ChefService from '../ChefService/ChefService';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <Category />
        <ChefService />
        <PopularMenu />
        <CallUs />
        <ChefRecommend />
      </div>
      <Featured />
      <div className="max-w-screen-xl mx-auto" d>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
