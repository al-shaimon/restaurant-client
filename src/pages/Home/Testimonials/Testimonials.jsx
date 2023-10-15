import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://restaurant-server-seven.vercel.app/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        className="text-black"
        subHeading="What Our Clients Say"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center justify-center my-4 mx-10 md:mx-24">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="text-6xl pt-6">
                <FaQuoteLeft></FaQuoteLeft>
              </p>
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
