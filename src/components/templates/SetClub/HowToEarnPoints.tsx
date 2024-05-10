import Image from "next/image";

type Props = {};

function HowToEarnPoints({}: Props) {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center  md:border-none border-b border-gray-600 my-16 py-5">
      <Image
        alt="chegoonehemtiaz"
        src="/images/chegoonehemtiaz.jpg"
        width={500}
        height={500}
      />
      <div className="text-slate-600">
        <h3 className="text-2xl font-extrabold text-black">
          2. چگونه امتیاز کسب کنم؟
        </h3>
        <ul>
          <li>هر 100 تومان خرید : 1 امتیاز</li>
          <li>ثبت نام : 5000 امتیاز</li>
          <li>ثبت دیدگاه : 1000 امتیاز</li>
          <li>ارجاع : 500 امتیاز</li>
        </ul>
      </div>
    </div>
  );
}

export default HowToEarnPoints;
