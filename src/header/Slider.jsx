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
import { Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="sliders">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={60}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="ab-slider"
        >
          <SwiperSlide ><img src={samanrashidiimg} /></SwiperSlide>
          <SwiperSlide><img src={amjadyimg} /></SwiperSlide>
          <SwiperSlide><img src={sadodinimg} /></SwiperSlide>
          <SwiperSlide><img src={meshaghiimg} /></SwiperSlide>
          <SwiperSlide><img src={msvalipourimg} /></SwiperSlide>
          <SwiperSlide><img src={fhormoziimg} /></SwiperSlide>

          </Swiper>
        <span>
          یک درصد برتر
        </span>
      </div>
    </div>
  );
};
export default Slider;
