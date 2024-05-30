import HomePageLayout from "@/components/layouts/homePageLayout";
import Product from "@/components/modules/product/product";
import Header from "@/components/templates/store/header";
import productModel from "@/models/product";
import connectToDB from "@/utils/db";

async function Coffees() {
  connectToDB();
  const coffees = await productModel.find({ category: "قهوه" });

  return (
    <HomePageLayout>
      <div className="overflow-hidden">
        <Header imgUrl="images/Coffee/coffeeBG.jpg" />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8 mx-10">
          {coffees.map((coffee: any) => (
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
      </div>
    </HomePageLayout>
  );
}

export default Coffees;
