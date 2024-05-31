import Layout from "@/components/layouts/panelUserLayout";
import InfoBox from "@/components/templates/p-user/index/InfoBox";
import Orders from "@/components/templates/p-user/index/orders";
import Tickets from "@/components/templates/p-user/index/tickets";

type Props = {};

function Index({}: Props) {
  return (
    <Layout>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-3">
        <InfoBox title="تیکت ها" value={5} />
        <InfoBox title="کامنت ها" value={3} />
        <InfoBox title="سفارشات" value={14} />
        <InfoBox title="علاقه مندی ها" value={20} />
      </div>
      <div className="flex md:flex-row flex-col gap-4 my-10">
        <Tickets />
        <Orders />
      </div>
    </Layout>
  );
}

export default Index;
