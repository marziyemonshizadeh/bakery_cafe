import Product from "@/components/modules/product/product";
import Header from "@/components/templates/store/header";

type Props = {};

function Drinks({}: Props) {
  return (
    <div className="overflow-hidden">
      <Header imgUrl="images/drink/drinkBG.jpg" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8">
        <Product
          imgUrl="images/drink/cappuccino-pain-d-epices.webp"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/Caramel-Frappaccino-thumbnail.png"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/hot chocolate.jpg"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/Sbux_Horchata_Frappuccino_KnockOut.jpg"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/Amaretto-brandy-coffee.webp"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/k-styleCoffee.jpg"
          title="دانه قهوه عربیکا"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/iced-tea-cocktail.jpg"
          title="iced tea"
          price={2000000}
        />
        <Product imgUrl="images/drink/tea.jpg" title="tea" price={2000000} />
        <Product
          imgUrl="images/drink/Rainbow-Smoothie.jpg"
          title="tea"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/blueberry-smoothies.webp"
          title="tea"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/caramel-macchiato.webp"
          title="caramel macchiato"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/Espresso.png"
          title="Espresso"
          price={2000000}
        />
        <Product
          imgUrl="images/drink/doubleEspresso.webp"
          title="double Espresso"
          price={2000000}
        />
      </div>
    </div>
  );
}

export default Drinks;
