import { FaShareAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { TbMessage } from "react-icons/tb";

type Props = {
  img: string;
  date: number;
  month: string;
  title: string;
  writer: string;
};

export default function Article({ img, date, month, title, writer }: Props) {
  return (
    <div
      className="bg-no-repeat text-lg text-white bg-slate-600 p-3 bg-cover flex flex-col justify-between select-none"
      style={{
        backgroundImage: `url("/${img}")`,
        // width: "350px",
        height: "350px",
        objectFit: "cover",
      }}
    >
      <div className="bg-slate-50 rounded-full text-black w-16 h-16 flex flex-col items-center">
        <span>{date}</span>
        <span>{month}</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-extrabold">{title}</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaUserLarge />
            {writer}
          </div>
          <TbMessage />
          <FaShareAlt />
        </div>
      </div>
    </div>
  );
}
