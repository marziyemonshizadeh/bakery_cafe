"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Header({}) {
  return (
    <header className="relative">
      <Swiper
        rewind={true}
        // navigation={true}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay]}
        className="mySwiper w-full h-screen"
      >
        <SwiperSlide
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("/images/header/1.jpg")',
          }}
          className="bg-no-repeat text-lg bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("/images/header/2.jpg")',
          }}
          className="bg-no-repeat text-lg bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("/images/header/3.jpg")',
          }}
          className="bg-no-repeat text-lg bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("/images/header/4.jpg")',
          }}
          className="bg-no-repeat text-lg bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("/images/header/5.jpg")',
          }}
          className="bg-no-repeat text-lg bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("/images/header/6.jpg")',
          }}
          className="bg-no-repeat text-lg bg-cover"
        ></SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("/images/header/7.jpg")',
          }}
          className="bg-no-repeat text-lg bg-cover"
        ></SwiperSlide>
      </Swiper>
    </header>
  );
}
