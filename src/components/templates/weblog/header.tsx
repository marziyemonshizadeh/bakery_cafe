import Link from "next/link";

type HeaderProps = { title: string };

function WeblogHeader({ title }: HeaderProps) {
  return (
    <header className="relative w-full h-96 bg-orange-950 text-white flex flex-col justify-center items-center gap-3">
      <h2 className="font-bold text-3xl"> {title}</h2>
      <div className="block">
        <Link href="/" className="hover:underline">
          خانه
        </Link>
        /<span>{title}</span>
      </div>
    </header>
  );
}

export default WeblogHeader;
