import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";

type CommentProps = { userName: string; message: string; score: number };

function Comment({ userName, message, score }: CommentProps) {
  return (
    <div className="grid grid-cols-6 py-4 border-b ">
      <Image
        className="h-14 w-14 col-span-1"
        alt="notFound"
        src="/images/user_icon2.jpg"
        width={200}
        height={200}
      />
      <div className="col-span-5 flex flex-col max-w-3xl">
        <div className="flex justify-between items-center w-full">
          <div>
            <span className="font-bold">{userName}</span>-
            <span className="text-slate-600"> ۲۱ بهمن ۱۴۰۲</span>
          </div>
          <div className="flex">
            {new Array(score).fill(0).map((star) => (
              <FaStar key={star} className="text-yellow-400" />
            ))}
            {new Array(5 - score).fill(0).map((star) => (
              <FaRegStar key={star} className="text-yellow-400" />
            ))}
          </div>
        </div>
        <div className="text-slate-600">{message}</div>
      </div>
    </div>
  );
}

export default Comment;
