import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import img1 from "../assets/img/header-slide1.jpg";
import img2 from "../assets/img/header-slide2.jpg";
import img3 from "../assets/img/header-slide3.jpg";
import person1 from "../assets/img/1.jpg";
import person2 from "../assets/img/2.jpg";
import person3 from "../assets/img/3.jpg";
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
          <SwiperSlide><img src={person1} /></SwiperSlide>
          <SwiperSlide><img src={person2} /></SwiperSlide>
          <SwiperSlide><img src={person3} /></SwiperSlide>
          <SwiperSlide><img src={person1} /></SwiperSlide>
          <SwiperSlide><img src={person2} /></SwiperSlide>
          <SwiperSlide><img src={person3} /></SwiperSlide>
          </Swiper>
        <p>
          یک درصد برتر
        </p>
      </div>
    </div>
  );
};
export default Slider;
