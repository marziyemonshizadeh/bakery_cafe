"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      console.log(window.scrollY);
      window.scrollY > 250 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <Link
      href="#"
      onClick={() => scrollToTop}
      id="btn-back-to-top"
      className={`${
        isVisible ? "visible " : "invisible "
      } rounded-full fixed bottom-3 right-3  flex items-center flex-col text-light justify-center bg-[#413a2d] text-[#D1B48C] border border-[#D1B48C] dark:bg-[#D1B48C] dark:text-[#413a2d] shadow shadow-[#D1B48C] w-14 h-14 z-50`}
    >
      <FaAngleUp className="shadow-2xl text-3xl" />
    </Link>
  );
}

export default ScrollToTop;
