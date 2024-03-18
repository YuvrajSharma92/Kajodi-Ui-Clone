import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function SwiperSlider() {
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="public/benner-1.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img src="public/benner-2.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img src="public/benner-3.webp" alt=""/></SwiperSlide>
     
    </Swiper>
    </>
  )
}
