import AddToWishList from "@/components/modules/AddToWishList/addToWishList";
import { authUser } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";
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
    <div className="flex flex-col overflow-hidden border border-gray-200 rounded-lg p-2 hover:cursor-pointer hover:bg-[#a59c95]/10 transition-colors z-20 select-none">
      {user && (
        <div className="flex justify-end p-2">
          <AddToWishList
            userID={JSON.parse(JSON.stringify(user._id))}
            productID={id}
          />
        </div>
      )}

      <Link href={`/product/${id}`} className="mx-auto">
        <Image
          className="w-48 h-48"
          alt={title}
          src={`/${imgUrl}`}
          width={200}
          height={200}
        />
      </Link>
      <section className="md:px-6 py-2 flex flex-col items-center gap-2">
        <p className="font-bold text-xl mb-2">{title}</p>
        <Scores starts={starts} />
        <span>{price} تومان</span>
        <div className="flex items-center gap-3">
          <Counter />
        </div>
      </section>
    </div>
  );
}
