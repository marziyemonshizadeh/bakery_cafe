import Product from "@/components/modules/product/product";
import Header from "@/components/templates/store/header";
import productModel from "@/models/product";
import connectToDB from "@/utils/db";

async function Pastries() {
  connectToDB();
  const pastries = await productModel.find({ category: "شیرینی" });

  return (
    <div className="overflow-hidden">
      <Header imgUrl="images/Pastry/pastriyBG.jpg" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8 mx-10">
        {pastries.map((pastry: any) => (
          <Product
            imgUrl={`images/${pastry.image}`}
            title={pastry.name}
            price={pastry.price}
            score={pastry.score}
          />
        ))}
      </div>
    </div>
  );
}

export default Pastries;
