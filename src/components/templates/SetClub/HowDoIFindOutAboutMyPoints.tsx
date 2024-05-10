import Image from "next/image";

type Props = {};

function HowDoIFindOutAboutMyPoints({}: Props) {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center  md:border-none border-b border-gray-600 my-16 py-5">
      <div className="text-slate-600">
        <h3 className="text-2xl font-extrabold text-black">
          3. چگونه از امتیازهای خود مطلع شوم؟
        </h3>
        بعد از ورود به حساب کاربری خود، به بخش پنل کاربری بخش امتیاز من مراجعه
        کنید. در این بخش علاوه بر زیر امتیازات کسب شده، امکانات دیگری نیز در
        اختیار شما قرار می گیرد.
      </div>
      <Image
        alt="Untitled-14"
        src="/images/Untitled-14.jpg"
        width={500}
        height={500}
      />
    </div>
  );
}

export default HowDoIFindOutAboutMyPoints;
