import Image from "next/image";
import Link from "next/link";

type Props = { imgUrl: string; title: string; des: string; link: string };

function WeblogArticle({ imgUrl, title, des, link }: Props) {
  return (
    <div className="flex flex-col w-80">
      <Image alt="..." src={imgUrl} width={200} height={200} className="w-80" />
      <h2 className="font-bold text-xl my-2">{title}</h2>
      <div className="text-slate-400">{des}</div>
      <Link href={link} className="hover:underline">
        ادامه ی مطلب
      </Link>
    </div>
  );
}

export default WeblogArticle;
