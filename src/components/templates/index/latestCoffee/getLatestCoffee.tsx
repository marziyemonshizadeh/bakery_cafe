"use client";

import Product from "@/components/modules/product/product";
import { useGetProducts } from "@/hooks/getProducts";
import SyncLoader from "react-spinners/SyncLoader";

const GetLatestCoffee = () => {
  const { data, isLoading, error } = useGetProducts();
  if (error)
    return (
      <div className="text-center m-3 font-bold">
        متاسفانه قادر به دریافت داده از سرور نشدیم !!!
      </div>
    );
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <SyncLoader color="#9E8473" />
      </div>
    );
  }
  return (
    <div className="latestProductsParent">
      {data
        ?.filter((product) => product.category.includes("قهوه"))
        .slice(0, 4)
        ?.map((coffee) => {
          return (
            <Product
              imgUrl={`images/${coffee.image}`}
              title={coffee.name}
              price={coffee.price}
              score={Number(coffee.score)}
              id={coffee._id}
              key={coffee._id}
            />
          );
        })}
    </div>
  );
};

export default GetLatestCoffee;
