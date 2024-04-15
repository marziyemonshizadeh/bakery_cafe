import Navbar from "@/components/modules/navbar/navbar";
import Articles from "@/components/templates/index/articles/articles";
import Header from "@/components/templates/index/header/header";
import LatestBread from "@/components/templates/index/latestBread/latestBread";
import LatestCoffee from "@/components/templates/index/latestCoffee/latestCoffee";
import LatestPastry from "@/components/templates/index/latestPastry/latestPastry";
import Promote from "@/components/templates/index/promote/promote";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <LatestCoffee />
      <LatestBread />
      <LatestPastry />
      <Promote />
      <Articles />
    </main>
  );
}
