import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


import banner1 from "../../../assets/images/Banner/yogendra-singh-ResjcGoMRRI-unsplash.jpg";
import banner2 from "../../../assets/images/Banner/nolan-kent--d2eGdbmYYU-unsplash.jpg";
import banner3 from "../../../assets/images/Banner/fei-chao-IaRe1EGaMRc-unsplash.jpg";
import banner4 from "../../../assets/images/Banner/katerina-kerdi-swIfqUbmu0o-unsplash.jpg";
import banner5 from "../../../assets/images/Banner/johann-walter-bantz-HG1pkXN7SVA-unsplash.jpg";

import banner7 from "../../../assets/images/Banner/william-topa-vQsvz6Txr58-unsplash.jpg";
import banner8 from "../../../assets/images/Banner/christopher-campbell-syyBwqVX0Hc-unsplash.jpg";
import banner9 from "../../../assets/images/Banner/ruben-leija-Qlrcw3yOKec-unsplash.jpg";




const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
        <div className=''>
          <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner9} />
        </SwiperSlide>
       
      </Swiper>
      </div>
    );
};

export default Banner;










