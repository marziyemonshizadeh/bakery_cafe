import Title from "@/components/modules/titleSection/titleSection";
import { GiBoxUnpacking, GiWrappedSweet } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import Service from "./service";

function OurServices() {
  return (
    <>
      <Title title="خدمات ما" />
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mx-5 gap-8 my-16 overflow-hidden">
        <Service text="ارسال سریع">
          <TbTruckDelivery className="text-slate-50 dark:text-[#2e2b27] w-16 h-16" />
        </Service>
        <Service text="فضای شیک">
          <HiHomeModern className="text-slate-50 dark:text-[#2e2b27] w-16 h-16" />
        </Service>
        <Service text="پشتیبانی عالی">
          <MdOutlineSupportAgent className="text-slate-50 dark:text-[#2e2b27] w-16 h-16" />
        </Service>
        <Service text="همیشه تازه">
          <GiWrappedSweet className="text-slate-50 dark:text-[#2e2b27] w-16 h-16" />
        </Service>
        <Service text="بسته بندی شیک">
          <GiBoxUnpacking className="text-slate-50 dark:text-[#2e2b27] w-16 h-16" />
        </Service>
        <Service text="با کیفیت">
          <PiPlantFill className="text-slate-50 dark:text-[#2e2b27] w-16 h-16" />
        </Service>
      </div>
    </>
  );
}

export default OurServices;
