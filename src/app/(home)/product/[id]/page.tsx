import Details from "@/components/templates/product/Details";
import HandleTab from "@/components/templates/product/handleTab";
import productModel from "@/models/product";
import connectToDB from "@/utils/db";
import { authUser } from "@/utils/serverHelpers";
import Image from "next/image";

type ProductProps = { params: any };

async function Product({ params }: ProductProps) {
  connectToDB();
  const productID = params.id;
  const product = await productModel
    .findOne({ _id: productID })
    .populate("comments");

  const user = await authUser();
  let userID = null;
  if (user) {
    userID = JSON.parse(JSON.stringify(user?._id));
  }

  return (
    <>
      <div className="relative top-28 lg:mx-36 md:mx-10 mx-2 leading-8">
        <div className="flex lg:flex-row flex-col gap-10 md:gap-60 justify-center items-center md:my-10 my-4">
          <Image
            className="w-72 h-72"
            alt="product"
            src={`/images/${product.image}`}
            width={200}
            height={200}
          />
          <Details product={JSON.parse(JSON.stringify(product))} />
        </div>
        <HandleTab
          product={JSON.parse(JSON.stringify(product))}
          productID={JSON.parse(JSON.stringify(productID))}
          userID={userID}
        />
      </div>
    </>
  );
}

export default Product;
