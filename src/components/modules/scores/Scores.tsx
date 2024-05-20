import { FaRegStar, FaStar } from "react-icons/fa";

type ScoresProps = { starts: number };

function Scores({ starts }: ScoresProps) {
  return (
    <div className="flex">
      {new Array(starts).fill(0).map((star, index) => (
        <FaStar key={index} className="text-yellow-400" />
      ))}
      {new Array(5 - starts).fill(0).map((star, index) => (
        <FaRegStar key={index} className="text-yellow-400" />
      ))}
    </div>
  );
}

export default Scores;
