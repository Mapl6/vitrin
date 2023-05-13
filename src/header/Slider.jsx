import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import samanrashidiimg from "../assets/img/samanrashidi.jpg";
import amjadyimg from "../assets/img/amjady.jpg";
import sadodinimg from "../assets/img/ssadodin.jpg";
import meshaghiimg from "../assets/img/meshaghi.jpg";
import msvalipourimg from "../assets/img/msvalipour.jpg";
import fhormoziimg from "../assets/img/fhormozi.jpg";
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
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
          <SwiperSlide style={{  backgroundPosition: 'center',backgroundSize: 'cover',width: '250px'}}><img src={samanrashidiimg} /></SwiperSlide>
          <SwiperSlide style={{  backgroundPosition: 'center',backgroundSize: 'cover',width: '250px'}}><img src={amjadyimg} /></SwiperSlide>
          <SwiperSlide style={{  backgroundPosition: 'center',backgroundSize: 'cover',width: '250px'}}><img src={sadodinimg} /></SwiperSlide>
          <SwiperSlide style={{  backgroundPosition: 'center',backgroundSize: 'cover',width: '250px'}}><img src={meshaghiimg} /></SwiperSlide>
          <SwiperSlide style={{  backgroundPosition: 'center',backgroundSize: 'cover',width: '250px'}}><img src={msvalipourimg} /></SwiperSlide>
          <SwiperSlide style={{  backgroundPosition: 'center',backgroundSize: 'cover',width: '250px'}}><img src={fhormoziimg} /></SwiperSlide>

          </Swiper>
        <span>
          یک درصد برتر
        </span>
      </div>
    </div>
  );
};
export default Slider;
