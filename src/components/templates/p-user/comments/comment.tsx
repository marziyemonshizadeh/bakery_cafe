"use client";
import Scores from "@/components/modules/scores/Scores";
import Link from "next/link";
const swal = require("sweetalert");

type UserCommentProps = {
  isAccess: boolean;
  id: number;
  date: string;
  title: string;
  stars: number;
  product: string;
};
export default function UserComment({
  isAccess,
  id,
  date,
  title,
  stars,
  product,
}: UserCommentProps) {
  const removeCommentHandler = () => {
    swal({
      title: "می خواهید کامنت خود را حذف کنید ؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (result: any) => {
      console.log("hazf comment");
    });
  };
  const showComment = () => {
    swal({ title, button: "اوکی" });
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
            isAccess ? "text-lime-500" : "text-yellow-500"
          } hover:underline`}
        >
          {isAccess ? "تایید شده" : "در انتظار تایید"}
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
      <td className="px-6 py-4 text-right">
        <Link
          href="#"
          className="font-medium text-black dark:text-blue-500 hover:underline"
          onClick={removeCommentHandler}
        >
          حذف
        </Link>
      </td>
      <td className="px-6 py-4 text-right">
        <Link
          href="#"
          className="font-medium text-black dark:text-blue-500 hover:underline"
        >
          ویرایش
        </Link>
      </td>
    </tr>
  );
}
