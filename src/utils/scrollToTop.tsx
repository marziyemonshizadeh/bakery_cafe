"use client";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false);
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
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "visible" : "invisible"
      } rounded-full fixed bottom-0 left-0 m-6 flex items-center flex-col text-light justify-center border-0 bg-[#D1B48C] text-[#413a2d] w-14 h-14 z-50 shadow-2xl`}
    >
      <FaAngleUp className="shadow-sm text-xl" />
    </button>
  );
}

export default ScrollToTop;
