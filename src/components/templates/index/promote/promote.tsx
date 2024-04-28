import Image from "next/image";
import Link from "next/link";
import Style from "./promote.module.css";
type Props = {};

export default function Promote({}: Props) {
  return (
    <div className="my-12">
      <div
        className={`${Style.parallax} ${Style.parallaxImg} flex justify-center items-center text-slate-100 text-6xl font-extrabold`}
      >
        CAFE
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center gap-12 bg-[#2F1E1B] text-orange-100 py-14">
        <Image
          src="/images/takeAway2.png"
          alt="qqq"
          width={200}
          height={200}
          className="w-auto h-auto"
        />
        <div className="text-center leading-10">
          <h2 className="font-bold text-orange-50 text-2xl">
            خرید قهوه ، به سبک حرفه ای ها
          </h2>
          <div>زیبایی امروز رو با قهوه بیشتر کنید</div>
          <Link href="#" className="hover:underline">
            تماس با ما
          </Link>
        </div>
      </div>
    </div>
  );
}
