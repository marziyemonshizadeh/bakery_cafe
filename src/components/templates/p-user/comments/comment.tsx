"use client";
import Scores from "@/components/modules/scores/Scores";
import { showSwal } from "@/utils/helpers";
import Link from "next/link";
const swal = require("sweetalert");

type UserCommentProps = {
  isAccept: boolean;
  id: number;
  date: string;
  title: string;
  stars: number;
  product: string;
};
export default function UserComment({
  isAccept,
  id,
  date,
  title,
  stars,
  product,
}: UserCommentProps) {
  const showComment = () => {
    showSwal(title, undefined, "اوکی", "#");
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{product}</td>
      <td className="px-6 py-4">
        <Scores starts={stars} />
      </td>
      <td className="px-6 py-4 text-right">
        <Link
          href="#"
          className={`font-medium ${
            isAccept ? "text-lime-500" : "text-yellow-500"
          } hover:underline`}
        >
          {isAccept ? "تایید شده" : "در انتظار تایید"}
        </Link>
      </td>
      <td className="px-6 py-4 text-right">
        <Link
          href="#"
          className="font-medium text-black dark:text-white hover:underline"
          onClick={showComment}
        >
          مشاهده
        </Link>
      </td>
    </tr>
  );
}
