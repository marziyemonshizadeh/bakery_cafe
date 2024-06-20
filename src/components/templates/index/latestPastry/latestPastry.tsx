import LinkToDisplayAllProducts from "@/components/modules/LinkToDisplayAllProducts/LinkToDisplayAllProducts";
import Title from "@/components/modules/titleSection/titleSection";
import { fetchProducts } from "@/fetcher/fetchProducts";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import GetLatestPastry from "./getLatestPastry";

export default async function LatestPastry() {
  // connectToDB();
  // const pastries = await productModel.find({ category: "شیرینی" });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  return (
    <div className="relative">
      <Title title=" جدیدترین شیرینی ها" />
      <LinkToDisplayAllProducts href="/store/PASTRIES" />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <GetLatestPastry />
      </HydrationBoundary>

      {/* <div className="latestProductsParent">
        {pastries?.slice(0, 4).map((pastry: any) => (
          <Product
            imgUrl={`images/${pastry.image}`}
            title={pastry.name}
            price={pastry.price}
            score={pastry.score}
            id={pastry._id}
            key={pastry._id}
          />
        ))}
      </div> */}
      {/* amazing background */}
      <div className="latestProductsAmazingBackGround" />
    </div>
  );
}
