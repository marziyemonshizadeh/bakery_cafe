"use client";
import TitleSection from "@/components/modules/titleSection/titleSection";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Article from "./articleCard";
type Props = {};

export default function Articles({}: Props) {
  return (
    <div>
      <TitleSection title="مقاله  ها" />
      <div className=" m-14">
        <Swiper
          rewind={true}
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay]}
          className="flex justify-center items-center"
        >
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
              date={3}
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
          {/* <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}
