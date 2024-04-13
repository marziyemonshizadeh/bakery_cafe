import Product from "@/components/modules/product/product";
import Title from "@/components/modules/titleSection/titleSection";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {};

export default function LatestPastry({}: Props) {
  return (
    <>
      <Title title=" جدیدترین شیرینی ها" />
      <div className="flex justify-end items-center gap-3 text-base me-8 mt-10">
        <FaArrowRightLong />
        نمایش همه ی شیرینی ها
      </div>
      <div data-aos="fade-down" className="flex">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}
