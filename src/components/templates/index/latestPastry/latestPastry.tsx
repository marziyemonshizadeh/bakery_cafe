"use client";
import "swiper/css";

import LinkToDisplayAllProducts from "@/components/modules/LinkToDisplayAllProducts/LinkToDisplayAllProducts";
import Product from "@/components/modules/product/product";
import Title from "@/components/modules/titleSection/titleSection";

type Props = {};

export default function LatestPastry({}: Props) {
  return (
    <div className="relative">
      <Title title=" جدیدترین شیرینی ها" />
      <LinkToDisplayAllProducts text="نمایش همه ی شیرینی ها" href="#" />
      <div
        // data-aos="fade-down"
        className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2 flex flex-col justify-center gap-1 mt-12"
      >
        <Product
          imgUrl="Pastry/PARIS-BREST.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="Pastry/lemon tart.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="Pastry/CROISSANT_BOYTYROY.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="Pastry/VanillaCremeBruleeRamekin.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />

        {/* <Swiper
          rewind={true}
          slidesPerView={4}
          spaceBetween={70}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay]}
          className="mySwiper home-slider w-full"
        >
          <SwiperSlide>
            <Product
              imgUrl="Pastry/VanillaCremeBruleeRamekin.png"
              title="دانه قهوه عربیکا"
              price={2000000}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              imgUrl="Pastry/PARIS-BREST.png"
              title="دانه قهوه عربیکا"
              price={2000000}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              imgUrl="Pastry/lemon tart.png"
              title="دانه قهوه عربیکا"
              price={2000000}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              imgUrl="Pastry/CROISSANT_BOYTYROY.png"
              title="دانه قهوه عربیکا"
              price={2000000}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              imgUrl="Pastry/Chocolate.png"
              title="دانه قهوه عربیکا"
              price={2000000}
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
      {/* amazing background */}
      <div className="w-full absolute top-[40%] bg-[#9E8473]/10 left-0 h-[200px] -skew-y-6" />
    </div>
  );
}