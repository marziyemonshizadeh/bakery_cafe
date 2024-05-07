"use client";
import LinkToDisplayAllProducts from "@/components/modules/LinkToDisplayAllProducts/LinkToDisplayAllProducts";
import Product from "@/components/modules/product/product";
import Title from "@/components/modules/titleSection/titleSection";
import "swiper/css";

type Props = {};

export default function LatestBread({}: Props) {
  return (
    <div className="relative">
      <Title title=" جدیدترین نان ها" />
      <LinkToDisplayAllProducts href="#" />
      <div
        // data-aos="fade-down"
        className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2 flex flex-col justify-center gap-1 mt-12 mx-40"
      >
        <Product
          imgUrl="images/Bread/simit.webp"
          title="نان بربری"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/ciabatta.png"
          title="ددددد"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/frenchBuguette.png"
          title="ددددد"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/traditional-knot-pretzel.webp"
          title="ددددد"
          price={2000000}
        />
      </div>
      {/* amazing background */}
      <div className="w-full absolute top-[40%] bg-[#9E8473]/10 left-0 h-[200px] -skew-y-6" />
    </div>
  );
}
