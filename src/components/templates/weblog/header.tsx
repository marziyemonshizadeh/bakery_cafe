import Link from "next/link";

type HeaderProps = { title: string };

function WeblogHeader({ title }: HeaderProps) {
  return (
    <header className="relative w-full h-96 dark:bg-[#BAA799] bg-[#9b8e7b] text-white flex flex-col justify-center items-center gap-3">
      <h2 className="font-bold text-3xl dark:text-[#413a2d]"> {title}</h2>
      <div className="block dark:text-[#413a2d]">
        <Link href="/" className="hover:underline">
          خانه
        </Link>
        /<span>{title}</span>
      </div>
    </header>
  );
}

export default WeblogHeader;
