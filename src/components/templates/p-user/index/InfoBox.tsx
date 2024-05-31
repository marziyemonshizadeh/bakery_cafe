import { IoStatsChart } from "react-icons/io5";

type InfoBoxProps = { title: string; value: number };

function InfoBox({ title, value }: InfoBoxProps) {
  return (
    <div className="relative rounded-md p-3 border border-[#711d1c] text-[#711d1c]  font-bold">
      <span className="text-black">{value}</span>
      <div className="flex justify-between items-center">
        <p>مجموع {title}</p>
        <IoStatsChart className="text-4xl" />
      </div>
    </div>
  );
}

export default InfoBox;
