import Product from "@/components/modules/product/product";
import Header from "@/components/templates/store/header";

type Props = {};

function Coffees({}: Props) {
  return (
    <div className="overflow-hidden">
      <Header imgUrl="images/Coffee/coffeeBG.jpg" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8">
        <Product
          imgUrl="images/Coffee/alibaba.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Coffee/setCoffee.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Coffee/jacobs_espresso.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Coffee/jacobs-mokka.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Coffee/jacobs.webp"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Coffee/nescafeGold.jpg"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Coffee/nescoffee.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
        <Product
          imgUrl="images/Coffee/turk-kahvesi.png"
          title="دانه قهوه عربیکا"
          price={2000000}
          score= {5}
        />
      </div>
    </div>
  );
}

export default Coffees;
