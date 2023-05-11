
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./assets/data.js"
import Card from './Card';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";

const Articles = () => {
  return (
    <div className="articles">
<Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
        
      >
          {data.map((item, index) => (
        <SwiperSlide>
        <Card
          key={index}
          img={item.img}
          title={item.title}
          g_scholar={item.g_scholar}
          reaseach={item.reseacher}
          email={item.email}
          website={item.website}
          scopus={item.scopus}
        />
        </SwiperSlide>
      ))}
      </Swiper>
</div>
  )
}
export default Articles