import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';



import banner1 from "../../../assets/images/Banner/yogendra-singh-ResjcGoMRRI-unsplash.jpg";
import banner2 from "../../../assets/images/Banner/nolan-kent--d2eGdbmYYU-unsplash.jpg";
import banner3 from "../../../assets/images/Banner/fei-chao-IaRe1EGaMRc-unsplash.jpg";
import banner4 from "../../../assets/images/Banner/katerina-kerdi-swIfqUbmu0o-unsplash.jpg";
import banner5 from "../../../assets/images/Banner/johann-walter-bantz-HG1pkXN7SVA-unsplash.jpg";

import banner7 from "../../../assets/images/Banner/william-topa-vQsvz6Txr58-unsplash.jpg";
import banner8 from "../../../assets/images/Banner/christopher-campbell-syyBwqVX0Hc-unsplash.jpg";
import banner9 from "../../../assets/images/Banner/ruben-leija-Qlrcw3yOKec-unsplash.jpg";


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

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
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    );
};

export default Banner;





