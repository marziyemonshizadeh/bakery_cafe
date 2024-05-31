import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Order from "./order";

type Props = {};

export default function Orders({}: Props) {
  return (
    <div className="md:w-2/4 bg-[#711d1c0f] text-black shadow-md rounded-md p-2">
      <div className="flex justify-between border-b border-[#711d1c] font-bold p-3">
        <p> سفارشات اخیر</p>
        <Link
          href="/p-user/tickets"
          className="flex items-center gap-2 hover:gap-6"
        >
          همه سفارشات <FaArrowLeft />
        </Link>
      </div>
      <Order />
      <Order />
      <Order />
      {/* <p className="text-xl font-semibold text-center p-3">تیکتی ثبت نشده</p> */}
    </div>
  );
}
