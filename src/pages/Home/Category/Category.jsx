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
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <section>
      {/* Small device */}
      <section className="md:hidden">
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
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/order/salad">
              <img className="md:w-full md:h-[30rem]" src={slide1} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Salads
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/order/pizza">
              <img className="md:w-full md:h-[30rem]" src={slide2} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Pizzas
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/order/soup">
              <img className="md:w-full md:h-[30rem]" src={slide3} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Soups
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/order/dessert">
              <img className="md:w-full md:h-[30rem]" src={slide4} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Desserts
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/order/drink">
              <img className="md:w-full md:h-[30rem]" src={slide5} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Drinks
              </h3>
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Medium and large device */}
      <section className="hidden md:block">
        <SectionTitle
          className="text-black"
          heading={'ORDER ONLINE'}
          subHeading={'From 11:00am to 10:00pm'}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
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
            <Link to="/order/salad">
              <img className="md:w-full md:h-[30rem]" src={slide1} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Salads
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/order/pizza">
              <img className="md:w-full md:h-[30rem]" src={slide2} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Pizzas
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/order/soup">
              <img className="md:w-full md:h-[30rem]" src={slide3} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Soups
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/order/dessert">
              <img className="md:w-full md:h-[30rem]" src={slide4} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Desserts
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/order/drink">
              <img className="md:w-full md:h-[30rem]" src={slide5} alt="" />
              <h3 className="text-xl md:text-4xl font-cinzel uppercase text-center text-white  -mt-16 ">
                Drinks
              </h3>
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

export default Category;
