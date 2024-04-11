import Image from "next/image";
import Link from "next/link";
import { FaBars, FaCartShopping, FaRegHeart, FaShuffle } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="absolute z-50 w-full">
      <div className="flex justify-between items-center bg-orange-200 p-2 px-4 text-sm m-6 mx-16 shadow-md">
        <section className="flex items-center gap-3">
          <FaBars className="w-5 h-5 text-orange-950 md:hidden inline-flex" />
          <Image
            alt="cooffee time"
            src="/coffee-time-logo.png"
            width={70}
            height={70}
            priority
          />
        </section>
        <section className="font-bold font-sans md:inline-flex hidden">
          <Link href="/" className="m-2">
            صفحه اصلی
          </Link>
          <Link href="/" className="m-2">
            فروشگاه
          </Link>
          <Link href="/" className="m-2">
            فروش سازمانی
          </Link>
          <Link href="/" className="m-2">
            وبلاگ
          </Link>
          <Link href="/" className="m-2">
            دیکشنری قهوه
          </Link>
          <Link href="/" className="m-2">
            تماس با ما
          </Link>
          <Link href="/" className="m-2">
            درباره ما
          </Link>
          <Link href="/" className="m-2">
            باشگاه مشتریان
          </Link>
          <Link href="/" className="m-2">
            ورود/عضویت
          </Link>
        </section>
        <section className="flex items-center gap-4">
          <MdWbSunny className="w-6 h-6 text-orange-950" />

          <button
            type="button"
            className="relative inline-flex p-1 items-center text-sm font-medium text-center text-white   focus:ring-4 focus:outline-none  "
          >
            <FaRegHeart className="w-5 h-5 text-orange-950" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 p-1 text-xs font-bold text-white bg-orange-900 rounded-full -top-2 -end-2 dark:border-gray-900">
              0
            </div>
          </button>
          <button
            type="button"
            className="relative inline-flex p-1 items-center text-sm font-medium text-center text-white   focus:ring-4 focus:outline-none  "
          >
            <FaShuffle className="w-5 h-5 text-orange-950" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 p-1 text-xs font-bold text-white bg-orange-900 rounded-full -top-2 -end-2 dark:border-gray-900">
              0
            </div>
          </button>
          <button
            type="button"
            className="relative inline-flex p-1 items-center text-sm font-medium text-center text-white   focus:ring-4 focus:outline-none  "
          >
            <FaCartShopping className="w-5 h-5 text-orange-950" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 p-1 text-xs font-bold text-white bg-orange-900 rounded-full -top-2 -end-2 dark:border-gray-900">
              0
            </div>
          </button>
        </section>
      </div>
    </nav>
  );
}
