"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { ImReply } from "react-icons/im";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineAttachMoney, MdSms } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";

function PanelUserSideBar() {
  const path = usePathname();
  return (
    <>
      <h2 className="font-extrabold text-lg p-3 border-solid border-b text-center md:text-right border-orange-950">
        به داشبورد خود خوش آمدید
      </h2>
      <ul className="md:space-y-2 md:block grid grid-cols-3 py-3">
        {path.includes("/p-user") ? (
          <>
            <Link
              href="/p-user"
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-user" && "bg-white"
              }`}
            >
              <ImReply className="icon" />
              <span className="font-extrabold text-lg mx-2">پیشخوان</span>
            </Link>
            <Link
              href="/p-user/orders"
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-user/orders" && "bg-white"
              }`}
            >
              <FaShoppingBag className="icon" />
              <span className="font-extrabold text-lg mx-2">سفارش ها</span>
            </Link>
            <Link
              href="/p-user/tickets"
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-user/tickets" && "bg-white"
              }`}
            >
              <MdSms className="icon" />
              <span className="font-extrabold text-lg mx-2">تیکت ها</span>
            </Link>
            <Link
              href="/p-user/comments"
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-user/comments" && "bg-white"
              }`}
            >
              <FaComments className="icon" />
              <span className="font-extrabold text-lg mx-2">کامنت ها</span>
            </Link>
            <Link
              href="/p-user/wishList"
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-user/wishList" && "bg-white"
              }`}
            >
              <FaHeart className="icon" />
              <span className="font-extrabold text-lg mx-2">علاقه مندی</span>
            </Link>
            <Link
              href="/p-user/accountDetails"
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-user/accountDetails" && "bg-white"
              }`}
            >
              <TbListDetails className="icon" />
              <span className="font-extrabold text-lg mx-2">جزئیات اکانت</span>
            </Link>
            <Link
              href="/p-user/changePassword"
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-user/changePassword" && "bg-white"
              }`}
            >
              <RiLockPasswordFill className="icon" />
              <span className="font-extrabold text-lg mx-2">تغییر پسورد</span>
            </Link>
          </>
        ) : (
          <>
            <Link
              href={"/p-admin"}
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-admin" && "bg-white"
              }`}
            >
              <ImReply className="icon" />
              <span className="font-extrabold text-lg mx-2">پیشخوان</span>
            </Link>

            <Link
              href={"/p-admin/products"}
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-admin/products" && "bg-white"
              }`}
            >
              <FaShoppingBag className="icon" />
              <span className="font-extrabold text-lg mx-2">محصولات</span>
            </Link>
            <Link
              href={"/p-admin/users"}
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-admin/users" && "bg-white"
              }`}
            >
              <FaUsers className="icon" />
              <span className="font-extrabold text-lg mx-2">کاربران</span>
            </Link>
            <Link
              href={"/p-admin/comments"}
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-admin/comments" && "bg-white"
              }`}
            >
              <FaComments className="icon" />
              <span className="font-extrabold text-lg mx-2">کامنت ها</span>
            </Link>

            <Link
              href={"/p-admin/tickets"}
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-admin/tickets" && "bg-white"
              }`}
            >
              <MdSms className="icon" />
              <span className="font-extrabold text-lg mx-2">تیکت ها</span>
            </Link>
            <Link
              href={"/p-admin/discount"}
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-admin/discount" && "bg-white"
              }`}
            >
              <MdOutlineAttachMoney className="icon" />
              <span className="font-extrabold text-lg mx-2">تخفیفات</span>
            </Link>
            <Link
              href="/p-admin/orders"
              className={`flex items-center gap-2 px-2 py-1 ${
                path == "/p-admin/orders" && "bg-white"
              }`}
            >
              <TbListDetails className="icon" />
              <span className="font-extrabold text-lg mx-2">جزئیات اکانت</span>
            </Link>
          </>
        )}
      </ul>
      <Link
        href="/"
        className="flex md:justify-between items-center md:gap-2 md:absolute md:bottom-1 md:border-t border-orange-950 px-2 py-1 w-full"
      >
        <span className="font-extrabold text-lg mx-2">خروج</span>
        <IoExitOutline className="icon" />
      </Link>
    </>
  );
}

export default PanelUserSideBar;
