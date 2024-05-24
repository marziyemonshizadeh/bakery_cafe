import OutsideClick from "@/hooks/OutsideClick";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaAngleDown, FaXmark } from "react-icons/fa6";

type MobileSideBarProps = {
  handleSetShowMobileSidebar: any;
};
export default function MobileSideBar({
  handleSetShowMobileSidebar,
}: MobileSideBarProps) {
  const boxRef = useRef(null);
  // boxOutsideClick will be true on outside click
  const boxOutsideClick = OutsideClick(boxRef);

  return (
    <>
      {!boxOutsideClick && (
        <div
          ref={boxRef}
          className="lg:hidden fixed w-96 min-h-screen overflow-y-auto bg-[#b89d77] dark:bg-[#413a2d] dark:text-[#eacfaa] p-3 z-50"
        >
          <div className="flex justify-between">
            <Link href="/">
              <Image
                alt="cooffee time"
                src="/images/coffee-time-logo.png"
                width={70}
                height={70}
                priority
                className="w-14 h-14"
              />
            </Link>
            <button onClick={handleSetShowMobileSidebar}>
              <FaXmark />
            </button>
          </div>

          <ul className="m-2 leading-[50px]">
            <li>
              <Link href="#">صفحه اصلی</Link>
            </li>

            <li className="relative group text-sm font-medium my-3">
              <Link
                href="/store"
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center text-sm font-medium text-center "
              >
                فروشگاه
                <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
              </Link>
              <div
                id="dropdownDots"
                className="hidden group-hover:block hover:block "
              >
                <ul
                  className="text-gray-700 dark:text-orange-950 leading-8 py-2"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <li>
                    <Link
                      href="/p-user/orders"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      نان
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/p-user/tickets"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      قهوه
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/p-user/tickets"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      شیرینی
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/p-user/tickets"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      نوشیدنی
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="#">قوانین </Link>
            </li>
            <li className="relative group text-sm font-medium my-4">
              <Link
                href="/weblog"
                id="dropdownMenuIconButton2"
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center text-sm font-medium text-center "
              >
                وبلاگ
                <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
              </Link>
              <div
                id="dropdownDots"
                className="hidden group-hover:block hover:block "
              >
                <ul
                  className="text-gray-700 dark:text-orange-950 leading-8 py-2"
                  aria-labelledby="dropdownMenuIconButton2"
                >
                  <li>
                    <Link
                      href="/weblog/training"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      آموزش
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/weblog/news"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      اخبار و مقالات
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="#">تماس با ما </Link>
            </li>

            <li className="relative group text-sm font-medium my-3">
              <Link
                href="/weblog"
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center text-sm font-medium text-center "
              >
                درباره ما
                <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
              </Link>
              <div
                id="dropdownDots"
                className="hidden group-hover:block hover:block "
              >
                <ul
                  className="text-gray-700 dark:text-orange-950 leading-8 py-2"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <li>
                    <Link
                      href="/weblog/training"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      شرایط و قوانین
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/weblog/news"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      ثبت شکایات
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="#">ورود/عضویت</Link>
            </li>
            <li className="relative group text-sm font-medium my-3">
              <Link
                href="/weblog"
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center text-sm font-medium text-center "
              >
                حساب کاربری
                <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
              </Link>
              <div
                id="dropdownDots"
                className="hidden group-hover:block hover:block "
              >
                <ul
                  className="text-gray-700 dark:text-orange-950 leading-8 py-2"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <li>
                    <Link
                      href="/weblog/training"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      سفارشات
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/weblog/news"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      تیکت های پشتیبانی
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/weblog/news"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      کامنت ها
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/weblog/news"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      علاقه مندی ها
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/weblog/news"
                      className="block px-3 hover:text-[#413a2d] hover:text-lg"
                    >
                      جزئیات اکانت
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
