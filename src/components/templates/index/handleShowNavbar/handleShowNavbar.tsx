"use client";

import MobileSideBar from "@/components/modules/MobileSideBar/MobileSideBar";
import Navbar from "@/components/modules/navbar/navbar";
import { useState } from "react";

type Props = { user: any };

function HandleShowNavbar({ user }: Props) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const handleSetShowMobileSidebar = () =>
    setShowMobileSidebar((prev) => !prev);
  return (
    <>
      <Navbar
        isLogin={user ? true : false}
        userName={user?.userName}
        handleSetShowMobileSidebar={handleSetShowMobileSidebar}
      />
      {showMobileSidebar && (
        <MobileSideBar
          handleSetShowMobileSidebar={handleSetShowMobileSidebar}
        />
      )}
    </>
  );
}

export default HandleShowNavbar;
