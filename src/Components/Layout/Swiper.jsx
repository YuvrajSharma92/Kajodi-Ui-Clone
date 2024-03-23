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
      <SwiperSlide><img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735669/benner-1_ofclvm.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735669/benner-2_hfkxou.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img src="https://res.cloudinary.com/dmvzvq5om/image/upload/v1710735670/benner-3_twmljm.webp" alt=""/></SwiperSlide>
     
    </Swiper>
    </>
  ) 
}
