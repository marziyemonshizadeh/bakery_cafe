import Footer from "@/components/modules/footer/page";
import Header from "@/components/modules/header/page";
import Navbar from "@/components/modules/navbar/page";
import "./globals.css";

export const metadata = {
  title: "Cafe",
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
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
