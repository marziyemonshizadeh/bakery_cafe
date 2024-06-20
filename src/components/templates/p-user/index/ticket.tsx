import Link from "next/link";

type Props = {};

export default function Ticket({}: Props) {
  return (
    <Link
      href={`/p-user/tickets/answer/2323`}
      className="bg-[#441010] text-slate-50 flex justify-between items-center rounded-md m-2 p-4 leading-8"
    >
      <div>
        <p>حجم بسته بندی</p>
        <button className="bg-slate-50 text-[#441010] rounded-md p-1 mt-2">
          واحد پشتیبانی
        </button>
      </div>
      <div>
        <p>8:00 1402/10/21</p>
        <p>پاسخ داده نشده</p>
      </div>
    </Link>
  );
}
