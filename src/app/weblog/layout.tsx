import Navbar from "@/components/modules/navbar/navbar";
import { authUser } from "@/utils/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await authUser();

  return (
    <div className="bg-white dark:bg-[#2e2b27]">
      <Navbar isLogin={user ? true : false} userName={user?.userName} />
      {children}
    </div>
  );
}
