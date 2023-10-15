import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle
        className="text-black"
        heading={'ORDER ONLINE'}
        subHeading={'From 11:00am to 10:00pm'}
      ></SectionTitle>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="md:w-full md:h-[30rem]" src={slide1} alt="" />
          <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:w-full md:h-[30rem]" src={slide2} alt="" />
          <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:w-full md:h-[30rem]" src={slide3} alt="" />
          <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:w-full md:h-[30rem]" src={slide4} alt="" />
          <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:w-full md:h-[30rem]" src={slide5} alt="" />
          <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
