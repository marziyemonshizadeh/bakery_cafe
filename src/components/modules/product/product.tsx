import { authUser } from "@/utils/serverHelpers";
import Image from "next/image";
import Link from "next/link";
import AddToWishList from "../AddToWishList/addToWishList";
import Counter from "../counter/counter";
import Scores from "../scores/Scores";

type ProductProps = {
  imgUrl: string;
  title: string;
  price: number;
  score: number;
  id?: number;
};

export default async function Product({
  imgUrl,
  title,
  price,
  score,
  id,
}: ProductProps) {
  let starts = Math.trunc(score);
  const user = await authUser();

  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow  hover:bg-[#a59c95]/10 transition-colors z-20 select-none">
      {user && (
        <div className="flex justify-end p-2">
          <AddToWishList
            userID={JSON.parse(JSON.stringify(user._id))}
            productID={id?.toString()}
          />
        </div>
      )}
      <Link href={`/product/${id}`}>
        <Image
          className="w-56 h-56 p-8 rounded-t-lg mx-auto"
          src={`/${imgUrl}`}
          alt="product image"
          width={200}
          height={200}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href={`/product/${id}`}>
          <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
            {title}
          </h5>
        </Link>
        <div className="flex justify-between items-center mt-2.5 mb-5">
          <div className="flex">
            <Scores starts={starts} />
            <span className="bg-orange-100 text-black text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {starts}.0
            </span>
          </div>
          <Counter />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {price.toLocaleString()}تومان
          </span>
          <button className="bg-[#413a2d] text-[#D1B48C] dark:bg-[#D1B48C] dark:text-[#413a2d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
}
