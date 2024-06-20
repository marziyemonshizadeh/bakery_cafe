"use client";

import Product from "@/components/modules/product/product";
import { useGetProducts } from "@/hooks/getProducts";
import SyncLoader from "react-spinners/SyncLoader";

const GetLatestBread = () => {
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
        ?.filter((product) => product.category.includes("نان"))
        .slice(0, 4)
        ?.map((bread) => {
          return (
            <Product
              imgUrl={`images/${bread.image}`}
              title={bread?.name}
              price={bread?.price}
              score={Number(bread.score)}
              id={bread?._id}
              key={bread?._id}
            />
          );
        })}
    </div>
  );
};

export default GetLatestBread;
