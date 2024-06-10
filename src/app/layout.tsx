import ScrollToTop from "@/components/modules/scrollToTop/scrollToTop";
import AosInit from "@/utils/aos";
import ThemeProv from "@/utils/theme";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata = {
  title: "Bakery_Cafe",
  description: "coffee / bakary project with next.js v13",
  icons: {
    icon: "https://seeklogo.com/images/C/coffee-time-logo-187E7F85DE-seeklogo.com.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning={true}>
      <body>
        <ThemeProv>
          <div className="static scrollbar-thin scrollbar-thumb-[#413a2d] dark:scrollbar-thumb-[#D1B48C] scrollbar-track-[#D1B48C] dark:scrollbar-track-[#413a2d] h-screen overflow-y-scroll">
            <AosInit />
            {children}
            <ScrollToTop />
          </div>
        </ThemeProv>
      </body>
    </html>
  );
}
