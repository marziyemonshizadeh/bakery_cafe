import Header from "@/components/templates/store/header";
import GetPastries from "@/components/templates/store/pastries/getPastries";

function Pastries() {
  // connectToDB();
  // const pastries = await productModel.find({ category: "شیرینی" });

  return (
    <>
      <div className="overflow-hidden">
        <Header imgUrl="images/Pastry/pastriyBG.jpg" />
        <GetPastries />
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8 mx-10">
          {pastries.map((pastry: any) => (
            <Product
              imgUrl={`images/${pastry.image}`}
              title={pastry.name}
              price={pastry.price}
              score={pastry.score}
              id={pastry._id}
              key={pastry._id}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Pastries;
