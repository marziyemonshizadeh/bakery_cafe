"use client";

import LinkToDisplayAllProducts from "@/components/modules/LinkToDisplayAllProducts/LinkToDisplayAllProducts";
import Product from "@/components/modules/product/product";
import Title from "@/components/modules/titleSection/titleSection";
import "swiper/css";

type Props = {};

export default function LatestCoffee({}: Props) {
  return (
    <div className="relative">
      <Title title=" جدیدترین قهوه ها" />
      <LinkToDisplayAllProducts href="#" />
      <div
        className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2 flex flex-col justify-center gap-1 mt-12"
        // data-aos="fade-down"
      >
        <Product
          imgUrl="images/Coffee/nescoffee.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/Coffee/nescafeGold.jpg"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/Coffee/alibaba.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        {/* <Product
            imgUrl="images/Coffee/jacobs.webp"
            title="دانه قهوه عربیکا"
            price={2000000}
          />
          <Product
            imgUrl="images/Coffee/jacobs_espresso.png"
            title="دانه قهوه عربیکا"
            price={2000000}
          /> */}
        <Product
          imgUrl="images/Coffee/jacobs-mokka.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
      </div>
      {/* amazing background */}
      <div className="w-full absolute top-[40%] bg-[#9E8473]/10 left-0 h-[200px] -skew-y-6" />
    </div>
  );
}
