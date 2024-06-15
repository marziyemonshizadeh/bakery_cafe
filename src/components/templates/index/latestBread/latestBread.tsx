import LinkToDisplayAllProducts from "@/components/modules/LinkToDisplayAllProducts/LinkToDisplayAllProducts";
import Product from "@/components/modules/product/product";
import Title from "@/components/modules/titleSection/titleSection";
import productModel from "@/models/product";
import connectToDB from "@/utils/db";

export default async function LatestBread() {
  connectToDB();
  const breads = await productModel.find({ category: "نان" });

  return (
    <div className="relative">
      <Title title=" جدیدترین نان ها" />
      <LinkToDisplayAllProducts href="/store/BREADS" />
      <div
        // data-aos="fade-down"
        className="latestProductsParent"
      >
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
      </div>
      {/* amazing background */}
      <div className="latestProductsAmazingBackGround" />
    </div>
  );
}
