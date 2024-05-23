import Product from "@/components/modules/product/product";

type WishListProductsProps = {};

function WishListProducts({}: WishListProductsProps) {
  return (
    <section className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 md:gap-2 flex flex-col justify-center gap-4 mt-12 md:mx-40 mx-5">
      <Product
        imgUrl="images/Coffee/nescoffee.png"
        title="دانه قهوه عربیکا"
        price={2000000}
        score={5}
      />
      <Product
        imgUrl="images/Coffee/nescafeGold.jpg"
        title="دانه قهوه عربیکا"
        price={2000000}
        score={2}
      />
      <Product
        imgUrl="images/Coffee/alibaba.png"
        title="دانه قهوه عربیکا"
        price={2000000}
        score={1}
      />

      <Product
        imgUrl="images/Coffee/jacobs-mokka.png"
        title="دانه قهوه عربیکا"
        price={2000000}
        score={4}
      />

      <Product
        imgUrl="images/Coffee/jacobs-mokka.png"
        title="دانه قهوه عربیکا"
        price={2000000}
        score={4}
      />

      <Product
        imgUrl="images/Coffee/jacobs-mokka.png"
        title="دانه قهوه عربیکا"
        price={2000000}
        score={4}
      />

      <Product
        imgUrl="images/Coffee/jacobs-mokka.png"
        title="دانه قهوه عربیکا"
        price={2000000}
        score={4}
      />

      <Product
        imgUrl="images/Coffee/jacobs-mokka.png"
        title="دانه قهوه عربیکا"
        price={2000000}
        score={4}
      />
    </section>
  );
}

export default WishListProducts;
