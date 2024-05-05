import Navbar from "@/components/modules/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar isLogin />
      {children}
    </div>
  );
}
