import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  imgUrl: string;
  title: string;
  sub: string;
};

export default function Article({ src, imgUrl, title, sub }: Props) {
  return (
    <Link
      href={src}
      className="flex items-center gap-2 my-3 py-2 border-b border-slate-700"
    >
      <Image alt="sss" src={imgUrl} width={80} height={80} />
      <div>
        <p>{title}</p>
        <sub>{sub}</sub>
      </div>
    </Link>
  );
}
