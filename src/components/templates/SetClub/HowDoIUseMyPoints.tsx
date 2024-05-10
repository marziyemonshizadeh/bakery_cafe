import Image from "next/image";

type Props = {};

function HowDoIUseMyPoints({}: Props) {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center  md:border-none border-b border-gray-600 my-16 py-5">
      <Image
        alt="Untitled-14"
        src="/images/Hamishetakhfif.png"
        width={500}
        height={500}
      />
      <div className="text-slate-600">
        <h3 className="text-2xl font-extrabold text-black">
          4. چگونه از امتیازهای خود استفاده کنم؟
        </h3>
        تبدیل به کوپن تخفیف: با کسب حداقل 10.000 امتیاز می توانید آن را تبدیل به
        کوپن تخفیف کنید. هر یک امتیاز، معادل یک تومان
      </div>
    </div>
  );
}

export default HowDoIUseMyPoints;
