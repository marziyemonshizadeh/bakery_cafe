"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <IoMdSunny className="w-5 h-5 text-orange-950 dark:text-[#eacfaa]" />
    );
  if (resolvedTheme === "dark") {
    return (
      <IoMdSunny
        onClick={() => setTheme("light")}
        className="w-5 h-5 text-orange-950 dark:text-[#eacfaa]"
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <IoMdMoon
        onClick={() => setTheme("dark")}
        className="w-5 h-5 text-orange-950 dark:text-[#eacfaa]"
      />
    );
  }
}
