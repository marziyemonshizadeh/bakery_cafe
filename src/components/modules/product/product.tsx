import { FaStar } from "react-icons/fa";

type Props = {};

export default function Product({}: Props) {
  return (
    <div className="max-w-sm overflow-hidden">
      <img
        className="w-full"
        src="/cofe card.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 flex flex-col items-center gap-2">
        <p className="font-bold text-xl mb-2">دانه قهوه عربیکاا</p>
        <div className="flex">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
        </div>
        <span>290,000 تومان</span>
      </div>
    </div>
  );
}
