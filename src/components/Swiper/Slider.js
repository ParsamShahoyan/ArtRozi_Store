import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import svg1 from "../../data/img/img.PNG"
import svg2 from "../../data/img/svg2.png"
import svg3 from "../../data/img/syg3.png"
import svg4 from "../../data/img/svg4.PNG"
import svg5 from "../../data/img/svg1.PNG"

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={svg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={svg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={svg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={svg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={svg5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
