import Navbar from "@/components/modules/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-[#2e2b27]">
      <Navbar isLogin />
      {children}
    </div>
  );
}
