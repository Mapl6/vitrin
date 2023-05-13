
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./assets/data.js"
import Card from './Card';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";

const Articles = () => {
  return (
    <div className="articles ">
<Swiper
        slidesPerView={3}

        grabCursor={true}
        
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper container"
        
      >
          {data.map((item, index) => (
        <SwiperSlide >
        <Card
          key={index}
          img={item.img}
          prof={item.prof}
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