import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import headerdata from "../assets/headerdata"

import img1 from "../assets/img/header-slide1.jpg";
import img2 from "../assets/img/header-slide2.jpg";
import img3 from "../assets/img/header-slide3.jpg";

// import required modules
import {Autoplay, Pagination, Navigation,EffectCoverflow } from "swiper";

const Slider = () => {
  return (
    <div className="header">
      <Swiper style={{height:"500px"}}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
      </Swiper>


      <div className="top-slider">
      <Swiper
      style={{width:"600px"}}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
           {headerdata.map((item, index) => (
    <SwiperSlide  style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '250px' ,borderRadius:"10px" }}>
      <img src={item.img} alt={item.title} />
      <span className="toptitle">{item.title}</span><br/>
      <span className="toptitle">{item.neme}</span>
    </SwiperSlide>
  ))}

          </Swiper>

      </div>
    </div>
  );
};
export default Slider;
