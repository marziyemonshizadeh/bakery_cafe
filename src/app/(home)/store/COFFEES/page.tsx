import GetCoffees from "@/components/templates/store/coffees/getCoffees";
import Header from "@/components/templates/store/header";

function Coffees() {
  // connectToDB();
  // const coffees = await productModel.find({ category: "قهوه" });

  return (
    <>
      <div className="overflow-hidden">
        <Header imgUrl="images/Coffee/coffeeBG.jpg" />
        <GetCoffees />
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8 mx-10">
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
        </div> */}
      </div>
    </>
  );
}

export default Coffees;
