import { FaRegStar, FaStar } from "react-icons/fa";

type ScoresProps = { starts: number };

function Scores({ starts }: ScoresProps) {
  return (
    <div className="flex">
      {new Array(starts).fill(0).map((star) => (
        <FaStar key={star} className="text-yellow-400" />
      ))}
      {new Array(5 - starts).fill(0).map((star) => (
        <FaRegStar key={star} className="text-yellow-400" />
      ))}
    </div>
  );
}

export default Scores;
