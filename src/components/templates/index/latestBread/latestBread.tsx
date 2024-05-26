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
      <LinkToDisplayAllProducts href="/store/breads" />
      <div
        // data-aos="fade-down"
        className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 md:gap-2 flex flex-col justify-center gap-1 mt-12 md:mx-40 mx-5"
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
      <div className="w-full absolute top-[40%] bg-[#9E8473]/10 left-0 h-[200px] -skew-y-6 z-10" />
    </div>
  );
}
