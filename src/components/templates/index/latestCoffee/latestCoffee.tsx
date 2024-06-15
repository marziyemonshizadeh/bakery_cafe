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
      <div className="latestProductsParent">
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
      <div className="latestProductsAmazingBackGround" />
    </div>
  );
}
