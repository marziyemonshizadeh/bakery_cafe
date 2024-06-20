import LinkToDisplayAllProducts from "@/components/modules/LinkToDisplayAllProducts/LinkToDisplayAllProducts";
import Title from "@/components/modules/titleSection/titleSection";
import { fetchProducts } from "@/fetcher/fetchProducts";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import GetLatestBread from "./getLatestBread";

export default async function LatestBread() {
  // connectToDB();
  // const breads = await productModel.find({ category: "نان" });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  return (
    <div className="relative">
      <Title title=" جدیدترین نان ها" />
      <LinkToDisplayAllProducts href="/store/BREADS" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <GetLatestBread />
      </HydrationBoundary>

      {/* <div className="latestProductsParent">
        {breads?.slice(0, 4).map((bread: any) => (
          <Product
            imgUrl={`images/${bread.image}`}
            title={bread.name}
            price={bread.price}
            score={bread.score}
            id={bread._id}
            key={bread._id}
          />
        ))}
      </div> */}
      {/* amazing background */}
      <div className="latestProductsAmazingBackGround" />
    </div>
  );
}
