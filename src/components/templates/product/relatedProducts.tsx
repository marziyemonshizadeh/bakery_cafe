"use client";

import Product from "@/components/modules/product/product";
import TitleSection from "@/components/modules/titleSection/titleSection";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function RelatedProducts() {
  return (
    <>
      <TitleSection title="محصولات مرتبط" />
      <Swiper
        rewind={true}
        spaceBetween={80}
        slidesPerView={3}
        navigation={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        // breakpoints={{
        //   400: {
        //     slidesPerView: 1,
        //   },
        //   639: {
        //     slidesPerView: 2,
        //   },
        //   865: {
        //     slidesPerView: 3,
        //   },
        //   1000: {
        //     slidesPerView: 3,
        //   },
        //   1500: {
        //     slidesPerView: 3,
        //   },
        //   1700: {
        //     slidesPerView: 4,
        //   },
        // }}
        className="mySwiper articles_slider my-32"
      >
        {/* {relatedProducts?.map((product: any) => ( */}
        <SwiperSlide>
          <Product
            imgUrl="images/Coffee/alibaba.png"
            title="دانه قهوه کلمبیا بدون کافئین ( Decaf ) مقدار 250 گرم"
            price={20000}
            score={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            imgUrl="images/Coffee/alibaba.png"
            title="دانه قهوه کلمبیا بدون کافئین ( Decaf ) مقدار 250 گرم"
            price={20000}
            score={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            imgUrl="images/Coffee/alibaba.png"
            title="دانه قهوه کلمبیا بدون کافئین ( Decaf ) مقدار 250 گرم"
            price={20000}
            score={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            imgUrl="images/Coffee/alibaba.png"
            title="دانه قهوه کلمبیا بدون کافئین ( Decaf ) مقدار 250 گرم"
            price={20000}
            score={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            imgUrl="images/Coffee/alibaba.png"
            title="دانه قهوه کلمبیا بدون کافئین ( Decaf ) مقدار 250 گرم"
            price={20000}
            score={5}
          />
        </SwiperSlide>
        {/* ))} */}
      </Swiper>
    </>
  );
}

export default RelatedProducts;
