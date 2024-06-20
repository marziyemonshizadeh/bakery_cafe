"use client";

import Product from "@/components/modules/product/product";
import { useGetProducts } from "@/hooks/getProducts";
import SyncLoader from "react-spinners/SyncLoader";

const GetLatestPastry = () => {
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
        ?.filter((product) => product.category.includes("شیرینی"))
        .slice(0, 4)
        ?.map((pastry) => {
          return (
            <Product
              imgUrl={`images/${pastry.image}`}
              title={pastry.name}
              price={pastry.price}
              score={Number(pastry.score)}
              id={pastry._id}
              key={pastry._id}
            />
          );
        })}
    </div>
  );
};

export default GetLatestPastry;
