import LinkToDisplayAllProducts from "@/components/modules/LinkToDisplayAllProducts/LinkToDisplayAllProducts";
import Product from "@/components/modules/product/product";
import Title from "@/components/modules/titleSection/titleSection";
import productModel from "@/models/product";
import connectToDB from "@/utils/db";

export default async function LatestPastry() {
  connectToDB();
  const pastries = await productModel.find({ category: "شیرینی" });

  return (
    <div className="relative">
      <Title title=" جدیدترین شیرینی ها" />
      <LinkToDisplayAllProducts href="/store/PASTRIES" />
      <div
        // data-aos="fade-down"
        className="latestProductsParent"
      >
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
      </div>
      {/* amazing background */}
      <div className="latestProductsAmazingBackGround" />
    </div>
  );
}
