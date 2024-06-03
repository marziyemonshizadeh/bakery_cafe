import Scores from "@/components/modules/scores/Scores";
import Image from "next/image";
import Link from "next/link";

type Props = { id: any; imgUrl: any; title: any; price: any; score: any };

export default function WishProduct({
  id,
  imgUrl,
  title,
  price,
  score,
}: Props) {
  return (
    <div className="flex flex-col overflow-hidden border border-gray-200 rounded-lg p-2 hover:cursor-pointer hover:bg-[#a59c95]/10 transition-colors z-20 select-none">
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
        <Scores starts={score} />
        <span>{price} تومان</span>
      </section>
      <button className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
        حذف از علاقه مندی
      </button>
    </div>
  );
}
