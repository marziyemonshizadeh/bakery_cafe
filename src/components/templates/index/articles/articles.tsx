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
          spaceBetween={80}
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
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper articles_slider"
        >
          <SwiperSlide>
            <Article
              img="images/articles/TheCoffeeGenome.jpg"
              date={2}
              month="sep"
              title="تحقیق ژنوم پیچیده قهوه عربیکا"
              writer="marziii"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Article
              img="images/articles/ThebenefitsOfCoffee.webp"
              date={3}
              month="sep"
              title="فواید قهوه"
              writer="marziii"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Article
              img="images/articles/AboutCoffee.jpg"
              date={4}
              month="sep"
              title="همه چیز درباره قهوه "
              writer="marziii"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Article
              img="images/articles/TurkCoffee.jpg"
              date={5}
              month="sep"
              title="قهوه ترک"
              writer="marziii"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
