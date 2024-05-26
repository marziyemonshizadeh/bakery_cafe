"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaCartShopping, FaRegHeart, FaShuffle } from "react-icons/fa6";
import ThemeSwitch from "../themeSwitch/themeSwitch";
import NavLinks from "./navLinks";
const swal = require("sweetalert");

type NavbarProps = {
  isLogin: boolean;
  userName: string;
  handleSetShowMobileSidebar?: any;
};

export default function Navbar({
  isLogin,
  userName,
  handleSetShowMobileSidebar,
}: NavbarProps) {
  const [fixToTop, setfixToTop] = useState(false);

  useEffect(() => {
    const fixNavToTop = () => {
      const surrentScroll = window.pageYOffset;
      if (surrentScroll > 180) {
        setfixToTop(true);
      } else {
        setfixToTop(false);
      }
    };
    window.addEventListener("scroll", fixNavToTop);
    // clean up my use effect (remove my event)
    return () => window.removeEventListener("scroll", fixNavToTop);
  }, []);

  return (
    <>
      <nav
        className={`${
          fixToTop ? "sticky" : "absolute "
        } top-0 z-40 w-full select-none`}
      >
        {/* {showMobileSidebar && (
          <MobileSideBar
            handleSetShowMobileSidebar={handleSetShowMobileSidebar}
          />
        )} */}

        <main
          className={`flex justify-between items-center bg-[#D1B48C] dark:bg-[#413a2d] dark:text-[#eacfaa] p-1 px-4 text-sm ${
            !fixToTop ? "m-6 rounded-3xl lg:mx-16" : ""
          }  shadow-md `}
        >
          {/* ......right........ */}

          <div className="flex items-center gap-3">
            <FaBars
              className="w-5 h-5 text-orange-950 lg:hidden inline-flex"
              onClick={handleSetShowMobileSidebar}
            />
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
          </div>

          {/* ......center........ */}
          <NavLinks isLogin={isLogin} userName={userName} />

          {/* ......left........ */}
          <div className="flex items-center gap-3">
            <ThemeSwitch />
            {isLogin && (
              <>
                <Link
                  href="/wishList"
                  type="button"
                  className="notificationBadgeParent"
                >
                  <FaRegHeart className="icon" />
                  <span className="sr-only">Notifications</span>
                  <div className="notificationBadgeChild">0</div>
                </Link>
              </>
            )}
            <button type="button" className="notificationBadgeParent">
              <FaShuffle className="icon" />
              <span className="sr-only">Notifications</span>
              <div className="notificationBadgeChild">0</div>
            </button>
            <button type="button" className="notificationBadgeParent">
              <FaCartShopping className="icon" />
              <span className="sr-only">Notifications</span>
              <div className="notificationBadgeChild">0</div>
            </button>
          </div>
        </main>
      </nav>
    </>
  );
}
