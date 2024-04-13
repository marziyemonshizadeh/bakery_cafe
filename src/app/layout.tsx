import Footer from "@/components/modules/footer/footer";
import AosInit from "@/utils/aos";
import "./globals.css";
export const metadata = {
  title: "Bakery_Cafe",
  description: "coffee / bakary project with next.js v13",
  icons: {
    // https://seeklogo.com/images/C/coffee-time-logo-187E7F85DE-seeklogo.com.png
    icon: "/coffee-time-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AosInit />
        {children}
        <Footer />
      </body>
    </html>
  );
}
