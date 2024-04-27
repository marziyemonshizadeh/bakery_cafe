"use client";
import TitleSection from "@/components/modules/titleSection/titleSection";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Article from "./articleCard";
type Props = {};

export default function Articles({}: Props) {
  return (
    <div className="mx-10">
      <TitleSection title="مقاله  ها" />
      <div className="my-14">
        <Swiper
          rewind={true}
          spaceBetween={70}
          slidesPerView={3}
          navigation={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper articles_slider"
        >
          <SwiperSlide>
            <Article
              img="hot chocolate.jpg"
              date={1}
              month="sep"
              title="best time drink coffee"
              writer="marziii"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Article
              img="hot chocolate.jpg"
              date={2}
              month="sep"
              title="best time drink coffee"
              writer="marziii"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Article
              img="hot chocolate.jpg"
              date={3}
              month="sep"
              title="best time drink coffee"
              writer="marziii"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Article
              img="hot chocolate.jpg"
              date={4}
              month="sep"
              title="best time drink coffee"
              writer="marziii"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Article
              img="hot chocolate.jpg"
              date={5}
              month="sep"
              title="best time drink coffee"
              writer="marziii"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
