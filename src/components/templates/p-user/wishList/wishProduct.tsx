"use client";

import Scores from "@/components/modules/scores/Scores";
import Image from "next/image";
import Link from "next/link";
const swal = require("sweetalert");

type Props = {
  productID: string;
  imgUrl: string;
  title: string;
  price: number;
  score: number;
};

export default function WishProduct({
  productID,
  imgUrl,
  title,
  price,
  score,
}: Props) {
  const removeWishProduct = () => {
    swal({
      title: "آیا می خواهید محصول را از علاقه مندی ها حذف کنید ؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (result: any) => {
      console.log(result);

      if (result) {
        const res = await fetch(`/api/wishList/${productID}`, {
          method: "DELETE",
        });

        if (res.status === 200) {
          swal({
            title: "محصول مورد نظر با موفقیت از لیست علاقه مندی ها حذف شد",
            icon: "success",
            buttons: "فهمیدم",
          }).then(() => {
            location.reload();
          });
        }
      }
    });
  };
  return (
    <div className="flex flex-col overflow-hidden border border-gray-200 rounded-lg p-2 hover:cursor-pointer hover:bg-[#a59c95]/10 transition-colors z-20 select-none">
      <Link href={`/product/${productID}`} className="mx-auto">
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
        <Scores starts={score} />
        <span>{price} تومان</span>
      </section>
      <button
        className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded"
        onClick={removeWishProduct}
      >
        حذف از علاقه مندی
      </button>
    </div>
  );
}
