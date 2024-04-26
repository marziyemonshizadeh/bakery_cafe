import { FaStar } from "react-icons/fa";

type Props = { imgUrl: string; title: string; price: number };

export default function Product({ imgUrl, title, price }: Props) {
  return (
    <div className="max-w-sm overflow-hidden flex flex-col justify-center items-center">
      <img
        className="w-60 h-60"
        src={`/${imgUrl}`}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 flex flex-col items-center gap-2">
        <p className="font-bold text-xl mb-2">{title}</p>
        <div className="flex">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
        </div>
        <span>{price} تومان</span>
      </div>
    </div>
  );
}
