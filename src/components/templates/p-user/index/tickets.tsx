import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Ticket from "./ticket";

type Props = {};

function Tickets({}: Props) {
  return (
    <div className="md:w-2/4 bg-[#711d1c0f] text-black shadow-md rounded-md p-2">
      <div className="flex justify-between border-b border-[#711d1c] font-bold p-3">
        <p>تیکت های اخیر</p>
        <Link
          href="/p-user/tickets"
          className="flex items-center gap-2 hover:gap-6"
        >
          همه تیکت ها <FaArrowLeft />
        </Link>
      </div>
      <Ticket />
      <Ticket />
      <Ticket />

      {/* <p className="text-xl font-semibold text-center p-3">تیکتی ثبت نشده</p> */}
    </div>
  );
}

export default Tickets;
