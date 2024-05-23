import Product from "@/components/modules/product/product";
import Header from "@/components/templates/store/header";
import productModel from "@/models/product";
import connectToDB from "@/utils/db";

async function Drinks() {
  connectToDB();
  const drinks = await productModel.find({ category: "نوشیدنی" });

  return (
    <div className="overflow-hidden">
      <Header imgUrl="images/drink/drinkBG.jpg" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8 mx-10">
        {drinks.map((drink: any) => (
          <Product
            imgUrl={`images/${drink.image}`}
            title={drink.name}
            price={drink.price}
            score={drink.score}
          />
        ))}
      </div>
    </div>
  );
}

export default Drinks;
