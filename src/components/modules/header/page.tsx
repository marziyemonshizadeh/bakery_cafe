"use client";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Header({}) {
  return (
    <header className="relative">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="w-full h-screen"
      >
        <SwiperSlide
          style={{
            backgroundImage: 'url("/1.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: 'url("/2.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: 'url("/3.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: 'url("/4.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: 'url("/5.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: 'url("/6.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: 'url("/7.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>
      </Swiper>
    </header>
  );
}
