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
        className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 md:gap-2 flex flex-col justify-center gap-1 mt-12 md:mx-40 mx-5"
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
      <div className="w-full absolute top-[40%] bg-[#9E8473]/10 left-0 h-[200px] -skew-y-6" />
    </div>
  );
}
