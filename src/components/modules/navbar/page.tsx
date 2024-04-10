import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaRegHeart, FaShuffle } from "react-icons/fa6";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex justify-between items-center bg-orange-200 p-2 text-sm m-6 mx-16">
      <div>
        <Image
          alt="cooffee time"
          src="/coffee-time-logo.png"
          width={70}
          height={70}
        />
      </div>
      <div className="font-bold font-sans">
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
      </div>
      <div className="flex gap-4">
        <FaRegHeart className="w-5 h-5" />
        <FaShuffle className="w-5 h-5" />
        <FaCartShopping className="w-5 h-5" />
      </div>
    </nav>
  );
}
