import LinkToDisplayAllProducts from "@/components/modules/LinkToDisplayAllProducts/LinkToDisplayAllProducts";
import Title from "@/components/modules/titleSection/titleSection";

import { fetchProducts } from "@/fetcher/fetchProducts";
// import productModel from "@/models/product";
// import connectToDB from "@/utils/db";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import GetLatestCoffee from "./getLatestCoffee";
type LatestCoffeeProps = {};

const LatestCoffee = async ({}: LatestCoffeeProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  // connectToDB();
  // const coffees = await productModel.find({ category: "قهوه" });

  return (
    <div className="relative">
      <Title title=" جدیدترین قهوه ها" />
      <LinkToDisplayAllProducts href="/store/COFFEES" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <GetLatestCoffee />
      </HydrationBoundary>
      {/* <div className="latestProductsParent">
        {coffees?.slice(0, 4).map((coffee: any) => (
          <Product
            imgUrl={`images/${coffee.image}`}
            title={coffee.name}
            price={coffee.price}
            score={coffee.score}
            id={coffee._id}
            key={coffee._id}
          />
        ))}
      </div> */}
      {/* amazing background */}
      <div className="latestProductsAmazingBackGround" />
    </div>
  );
};
export default LatestCoffee;
