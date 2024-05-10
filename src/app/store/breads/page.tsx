import Product from "@/components/modules/product/product";
import Header from "@/components/templates/store/header";

function Breads() {
  return (
    <div className="overflow-hidden">
      <Header imgUrl="images/Bread/breadBG.jpg" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 m-5">
        <Product
          imgUrl="images/Bread/Barbari.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/ciabatta.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/frenchBuguette.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/multigrain-sandwich.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/protein_bread.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/sangakbread.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/simit.webp"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/Bread/traditional-knot-pretzel.webp"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
      </div>
    </div>
  );
}

export default Breads;
