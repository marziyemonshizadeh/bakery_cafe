import SideBar from "@/components/modules/panelUser/pUserSideBar";
import Navbar from "../modules/panelUser/pUserNavbar";

type PanelUserLayoutProps = { children: React.ReactNode };

function PanelUserLayout({ children }: PanelUserLayoutProps) {
  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-1 grid-flow-cols bg-slate-50 dark:bg-gray-700">
      <div className="xl:col-span-1 md:col-span-1 sm:col-auto bg-[#711d1c0f] text-orange-950 dark:bg-gray-600 md:h-screen min-h-32 sticky top-0 z-20">
        <SideBar />
      </div>
      <div className="xl:col-span-5 md:col-span-3 block sm:col-span-1 bg-slate-50 dark:bg-gray-700  md:mx-3 mb-14 p-2">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default PanelUserLayout;
