import Image from "next/image";
import Scores from "../scores/Scores";

type CommentProps = { userName: string; message: string; score: number };

function Comment({ userName, message, score }: CommentProps) {
  return (
    <div className="grid grid-cols-6 py-4 border-b ">
      <Image
        className="h-14 w-14 col-span-1"
        alt="notFound"
        src="/images/user3.avif"
        width={200}
        height={200}
      />
      <div className="col-span-5 flex flex-col max-w-3xl">
        <div className="flex justify-between items-center w-full">
          <div>
            <span className="font-bold">{userName}</span>-
            <span className="text-slate-600"> ۲۱ بهمن ۱۴۰۲</span>
          </div>
          <Scores starts={score} />
        </div>
        <div className="text-slate-600">{message}</div>
      </div>
    </div>
  );
}

export default Comment;
