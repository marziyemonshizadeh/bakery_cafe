import GetBreads from "@/components/templates/store/breads/getBreads";
import Header from "@/components/templates/store/header";

function Breads() {
  // connectToDB();
  // const breads = await productModel.find({ category: "نان" });

  return (
    <>
      <div className="overflow-hidden">
        <Header imgUrl="images/Bread/breadBG.jpg" />
        <GetBreads />
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-8 mx-10"> */}
        {/* {breads.map((bread: any) => (
            <Product
              imgUrl={`images/${bread.image}`}
              title={bread.name}
              price={bread.price}
              score={bread.score}
              id={bread._id}
              key={bread._id}
            />
          ))} */}
        {/* </div> */}
      </div>
    </>
  );
}

export default Breads;
