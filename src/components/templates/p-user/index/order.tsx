import Link from "next/link";

type Props = {};

function Order({}: Props) {
  return (
    <Link
      href={`/p-user/tickets/answer/2323`}
      className="text-[#441010] bg-slate-50 flex justify-between items-center rounded-md m-2 p-3 font-bold leading-10"
    >
      {/* bg-[#711d1c21] */}
      <div>
        <p>قهوه عربیکا خالص</p>
        <p className="">تکمیل شده</p>
      </div>
      <div>
        <p>8:00 1402/10/21</p>
        <p> 1000000 تومان</p>
      </div>
    </Link>
  );
}

export default Order;
