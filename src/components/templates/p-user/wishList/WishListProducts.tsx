import WishProduct from "./wishProduct";

type WishListProductsProps = { wishes: [] };

function WishListProducts({ wishes }: WishListProductsProps) {
  return (
    <section className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 md:gap-2 flex flex-col justify-center gap-4 my-8">
      {wishes.length > 0 &&
        wishes.map((wish: any) => (
          <WishProduct
            key={wish._id}
            id={wish._id}
            imgUrl={`images/${wish.productID.image}`}
            title={wish.productID.name}
            price={wish.productID.price}
            score={parseInt(wish.productID.score)}
          />
        ))}
    </section>
  );
}

export default WishListProducts;
