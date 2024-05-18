import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  href: string;
};

function ShowAllProductLink({ href }: Props) {
  return (
    <Link
      href={href}
      className="md:flex hidden justify-end items-center text-orange-900 dark:text-[#897D5E] gap-3 hover:gap-6 text-base me-8 mt-10"
    >
      <FaArrowRightLong className="mt-2" />
      نمایش همه
    </Link>
  );
}

export default ShowAllProductLink;
