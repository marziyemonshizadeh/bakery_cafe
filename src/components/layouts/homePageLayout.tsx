import { authUser } from "@/utils/serverHelpers";
import React from "react";
import Navbar from "../modules/navbar/navbar";

type homePageLayoutProps = { children: React.ReactNode };

const HomePageLayout = async ({ children }: homePageLayoutProps) => {
  const user = await authUser();

  return (
    <div className="bg-white dark:bg-[#2e2b27]">
      <Navbar isLogin={user ? true : false} userName={user?.userName} />
      {children}
    </div>
  );
};

export default HomePageLayout;
