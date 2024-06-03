import Footer from "@/components/modules/footer/footer";
import Articles from "@/components/templates/index/articles/articles";
import Discount from "@/components/templates/index/discount/Discount";
import HandleShowNavbar from "@/components/templates/index/handleShowNavbar/handleShowNavbar";
import Header from "@/components/templates/index/header/header";
import LatestBread from "@/components/templates/index/latestBread/latestBread";
import LatestCoffee from "@/components/templates/index/latestCoffee/latestCoffee";
import LatestPastry from "@/components/templates/index/latestPastry/latestPastry";
import OurServices from "@/components/templates/index/ourServices/ourServices";
import Promote from "@/components/templates/index/promote/promote";
import SecondPromote from "@/components/templates/index/secondPromote/secondPromote";
import { authUser } from "@/utils/serverHelpers";

export default async function Home() {
  const user = await authUser();

  return (
    <main className="bg-white dark:bg-[#2e2b27] relative">
      <HandleShowNavbar user={user} />
      <Header />
      <LatestCoffee />
      <LatestBread />
      <Discount />
      <LatestPastry />
      <Promote />
      <OurServices />
      <SecondPromote />
      <Articles />
      <Footer />
    </main>
  );
}
