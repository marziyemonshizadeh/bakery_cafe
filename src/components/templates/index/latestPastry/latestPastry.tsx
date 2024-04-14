import Product from "@/components/modules/product/product";
import Title from "@/components/modules/titleSection/titleSection";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {};

export default function LatestPastry({}: Props) {
  return (
    <div className="relative">
      <Title title=" جدیدترین شیرینی ها" />
      <div className="flex justify-end items-center text-orange-900 gap-3 hover:gap-6 text-base me-8 mt-10">
        <FaArrowRightLong className="mt-2" />
        نمایش همه ی شیرینی ها
      </div>
      <div data-aos="fade-down" className="flex">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      {/* amazing background */}
      <div className="w-full absolute top-[40%] bg-[#9E8473]/10 left-0 h-[200px] -skew-y-6" />
    </div>
  );
}
