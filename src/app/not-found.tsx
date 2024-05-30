import Image from "next/image";
import Link from "next/link";

function notFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-orange-50 w-full h-screen">
      <Image
        className="w-44 h-44"
        alt="notFound"
        src="/images/404-icon.png"
        width={200}
        height={200}
        priority
      />
      <p className="font-semibold">صفحه ی مورد نظر متاسفانه یافت نشد!!!</p>
      <Link href="/" className="font-extrabold text-[#F4A518] hover:underline">
        صفحه ی اصلی
      </Link>
    </div>
  );
}

export default notFound;
