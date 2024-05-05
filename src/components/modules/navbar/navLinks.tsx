import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
type NavLinksProps = { isLogin: boolean };

function NavLinks({ isLogin }: NavLinksProps) {
  return (
    <ul className="relative font-bold font-sans flex-row gap-6  hidden lg:inline-flex">
      <li>
        <Link href="#" className="m-2">
          صفحه اصلی
        </Link>
      </li>

      <li className="relative group">
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
          className="hidden group-hover:block hover:block absolute top-5 bg-orange-50 dark:bg-[#D1B48C] dark:text-orange-950 z-10 divide-ybg-orange-50 divide-orange-100 rounded-lg w-44 shadow-sm shadow-orange-600"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-orange-950"
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <Link
                href="/p-user/orders"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                نان
              </Link>
            </li>
            <li>
              <Link
                href="/p-user/tickets"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                قهوه
              </Link>
            </li>
            <li>
              <Link
                href="/p-user/tickets"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                شیرینی
              </Link>
            </li>
            <li>
              <Link
                href="/p-user/tickets"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                نوشیدنی
              </Link>
            </li>
          </ul>
        </div>
      </li>

      {/* <li>
    <Link href="#" className="m-2">
      فروش سازمانی
    </Link>
  </li> */}

      {/* <li>
    <Link href="#" className="m-2">
      دیکشنری قهوه
    </Link>
  </li> */}

      {/* <li>
    <Link href="#" className="m-2">
      باشگاه مشتریان
    </Link>
  </li> */}

      <li className="relative group">
        <Link
          href="/weblog"
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          className="inline-flex items-center text-sm font-medium text-center "
        >
          وبلاگ
          <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
        </Link>
        <ul
          id="dropdownDots"
          className="py-2 hidden group-hover:block hover:block absolute top-5 bg-orange-50 dark:bg-[#D1B48C] dark:text-orange-950 z-10 divide-ybg-orange-50 divide-orange-100 rounded-lg w-44 shadow-sm shadow-orange-600"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <Link
              href="/weblog/training"
              className="block px-4 py-2 hover:bg-orange-100"
            >
              آموزش{" "}
            </Link>
          </li>
          <li>
            <Link
              href="/weblog/news"
              className="block px-4 py-2 hover:bg-orange-100"
            >
              اخبار و مقالات{" "}
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="#" className="flex items-center">
          قوانین
        </Link>
      </li>

      <li>
        <Link href="/weblog/contactUs" className="m-2">
          تماس با ما
        </Link>
      </li>

      <li className="relative group">
        <Link
          href="/about-us"
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          className="inline-flex items-center text-sm font-medium text-center "
        >
          درباره ما
          <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
        </Link>
        <div
          id="dropdownDots"
          className="hidden group-hover:block hover:block absolute top-5 bg-orange-50  z-10 divide-ybg-orange-50 divide-orange-100 rounded-lg w-44 shadow-sm shadow-orange-600 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-2 text-sm text-gray-700 bg-orange-50 dark:bg-[#D1B48C] dark:text-orange-950 z-10 divide-ybg-orange-50 divide-orange-100 rounded-lg w-44 shadow-sm shadow-orange-600 "
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <Link
                href="/p-user/orders"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                شرایط و قوانین
              </Link>
            </li>
            <li>
              <Link
                href="/p-user/tickets"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                ثبت شکایات
              </Link>
            </li>
          </ul>
        </div>
      </li>
      {isLogin ? (
        <>
          <li className="relative group">
            <Link
              href="/p-user"
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center text-sm font-medium text-center "
            >
              حساب کاربری
              <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
            </Link>
            <ul
              id="dropdownDots"
              className="py-2 hidden group-hover:block hover:block absolute top-5 bg-orange-50 dark:bg-[#D1B48C] dark:text-orange-950 z-10 divide-ybg-orange-50 divide-orange-100 rounded-lg w-44 shadow-sm shadow-orange-600"
              aria-labelledby="dropdownMenuIconButton"
            >
              <li>
                <Link
                  href="/p-user/orders"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  سفارشات
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/tickets"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  تیکت های پشتیبانی
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/comments"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  کامنت ها
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/favorites"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  علاقه مندی ها
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/account-details"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  جزئیات اکانت{" "}
                </Link>
              </li>
            </ul>
          </li>
        </>
      ) : (
        <li>
          <Link href="/login-register" className="m-2">
            ورود/عضویت
          </Link>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
