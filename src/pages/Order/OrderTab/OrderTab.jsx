import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid md:grid-cols-3 gap-2">
          {items.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderTab;

// import FoodCard from '../../../components/FoodCard/FoodCard';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import { chunk } from 'lodash';

// import 'swiper/css';
// import 'swiper/css/pagination';

// const OrderTab = ({ items }) => {
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + '</span>';
//     },
//   };
//   const itemChunks = chunk(items, 6);
//   return (
//     <Swiper
//       pagination={pagination}
//       modules={[Pagination]}
//       className="mySwiper"
//       slidesPerView={1}
//       slidesPerGroup={1}
//     >
//       {itemChunks.map((chunk, i) => (
//         <SwiperSlide key={i}>
//           <div className="grid md:grid-cols-3 gap-10">
//             {chunk.map((item) => (
//               <FoodCard key={item._id} item={item}></FoodCard>
//             ))}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default OrderTab;
