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
      <LinkToDisplayAllProducts href="/store/pastries" />
      <div
        // data-aos="fade-down"
        className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 md:gap-2 flex flex-col justify-center gap-1 mt-12 md:mx-40 mx-5"
      >
        <Product
          imgUrl="images/Pastry/PARIS-BREST.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/lemon tart.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/CROISSANT_BOYTYROY.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/VanillaCremeBruleeRamekin.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
      </div>
      {/* amazing background */}
      <div className="w-full absolute top-[40%] bg-[#9E8473]/10 left-0 h-[200px] -skew-y-6" />
    </div>
  );
}
