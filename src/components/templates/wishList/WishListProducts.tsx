import Product from "@/components/modules/product/product";

type WishListProductsProps = { wishes: any };

function WishListProducts({ wishes }: WishListProductsProps) {
  return (
    <section className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 md:gap-2 flex flex-col justify-center gap-4 mt-12 md:mx-40 mx-5">
      {wishes.length > 0 &&
        wishes.map((wish: any) => (
          <Product
            key={wish._id}
            imgUrl={`images/${wish.productID.image}`}
            title={wish.productID.name}
            price={wish.productID.price}
            score={wish.productID.score}
          />
        ))}
    </section>
  );
}

export default WishListProducts;
