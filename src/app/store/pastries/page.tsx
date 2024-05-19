import Product from "@/components/modules/product/product";
import Header from "@/components/templates/store/header";

type Props = {};

function Pastries({}: Props) {
  return (
    <div className="overflow-hidden">
      <Header imgUrl="images/Pastry/pastriyBG.jpg" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8">
        <Product
          imgUrl="images/Pastry/Chocolate.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/ApplePie.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/CROISSANT_BOYTYROY.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/CROISSANT_PRALINA.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/Eclair_1.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/egg-tart-with-ai-generated-free-png.webp"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/ir.ashpazifu.fu_512x512.webp"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/khamei.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/lemon tart.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/macaroone.webp"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/macaroons.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/NY_cheesecake1.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/PARIS-BREST.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/tiramisu cup.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/trilice.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Pastry/VanillaCremeBruleeRamekin.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
      </div>
    </div>
  );
}

export default Pastries;
