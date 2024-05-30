import LinkToDisplayAllProducts from "@/components/modules/LinkToDisplayAllProducts/LinkToDisplayAllProducts";
import Product from "@/components/modules/product/product";
import Title from "@/components/modules/titleSection/titleSection";
import productModel from "@/models/product";
import connectToDB from "@/utils/db";

type Props = {};

export default async function LatestCoffee({}: Props) {
  connectToDB();
  const coffees = await productModel.find({ category: "قهوه" });

  return (
    <div className="relative">
      <Title title=" جدیدترین قهوه ها" />
      <LinkToDisplayAllProducts href="/store/COFFEES" />
      <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 md:gap-2 flex flex-col justify-center gap-1 mt-12 md:mx-40 mx-5">
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
      </div>
      {/* amazing background */}
      <div className="w-full absolute top-[40%] bg-[#9E8473]/10 left-0 h-[200px] -skew-y-6" />
    </div>
  );
}
