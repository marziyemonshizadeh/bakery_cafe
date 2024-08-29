import ScrollToTop from "@/components/modules/scrollToTop/scrollToTop";
import Providers from "@/lib/ReactQueryClientProvider";
import AosInit from "@/utils/aos";
import ThemeProv from "@/utils/theme";
import NextTopLoader from "nextjs-toploader";
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
        <Providers>
          <ThemeProv>
            {/* when use scrollbar style aos not working */}
            {/* scrollbar-thin scrollbar-thumb-[#413a2d] dark:scrollbar-thumb-[#D1B48C] scrollbar-track-[#D1B48C] dark:scrollbar-track-[#413a2d] h-[100svh]overflow-y-scroll */}
            <div className="static">
              <AosInit />
              <NextTopLoader
                color="#D1B48C"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={true}
                easing="ease"
                speed={200}
                shadow="0 0 10px #431407,0 0 5px #431407"
                template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                zIndex={1600}
                showAtBottom={false}
              />
              {children}
              <ScrollToTop />
            </div>
          </ThemeProv>
        </Providers>
      </body>
    </html>
  );
}
