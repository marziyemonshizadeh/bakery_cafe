import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  text: string;
  href: string;
};

function ShowAllProductLink({ text, href }: Props) {
  return (
    <Link
      href={href}
      className="flex justify-end items-center text-orange-900 dark:text-[#897D5E] gap-3 hover:gap-6 text-base me-8 mt-10"
    >
      <FaArrowRightLong className="mt-2" />
      {text}
    </Link>
  );
}

export default ShowAllProductLink;
