// "use client";

import Navbar from "@/components/modules/navbar/navbar";
import Descriptions from "@/components/templates/product/Description";
import Details from "@/components/templates/product/Details";
import Tab from "@/components/templates/product/tab";
import productModel from "@/models/product";
import { authUser } from "@/utils/auth";
import connectToDB from "@/utils/db";
// import { useState } from "react";

import Image from "next/image";

type ProductProps = { params: any };

async function Product({ params}:ProductProps) {
  connectToDB();
  const productID = params.id;
  // const product = await productModel.find({_id : productID}).populate('comments')
  const product = await productModel.findOne({ _id: productID }).populate(
    "comments"
  );
  console.log("product",product);
  
  // const [activeTab, setActiveTab] = useState<any>(tabs.DESCRIPTION);

  // const showDescriptionTab = () => setActiveTab(tabs.DESCRIPTION);
  // const showMoreInfoesTab = () => setActiveTab(tabs.MOREINFOES);
  // const showCommentsTab = () => setActiveTab(tabs.COMMENTS);

  const user = await authUser();
  return (
    <div className="bg-white dark:bg-[#2e2b27] h-full">
      <Navbar isLogin={user ? true : false} userName={user?.userName} />
      <div className="relative top-28 lg:mx-36 md:mx-10 mx-2 leading-8">
        <div className="flex lg:flex-row flex-col gap-10 md:gap-60 justify-center items-center md:my-10 my-4">
          <Image
            className="w-72 h-72"
            alt="notFound"
            src={`/images/Coffee/${product.image}`}
            width={200}
            height={200}
          />
          <Details product={JSON.parse(JSON.stringify(product))}/>
        </div>

        <Tab/>
        <Descriptions />
        {/* {activeTab === tabs.DESCRIPTION && <Descriptions />} */}
        {/* {activeTab === tabs.MOREINFOES && <MoreInfoes />}
        {activeTab === tabs.COMMENTS && <Comments />} */}
      </div>
    </div>
  );
}

export default Product;
