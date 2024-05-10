import Image from "next/image";

type Props = {};

function ClubMember({}: Props) {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center  md:border-none border-b border-gray-600 my-16 py-5">
      <div className="text-slate-600">
        <h3 className="text-2xl font-extrabold text-black">
          1. چگونه عضو باشگاه شویم؟
        </h3>
        با ثبت نام و ایجاد حساب کاربری در وب سایت اینترنتی قهوه ست به آدرس:
        set-coffe.com
        <br />
        عضو باشگاه شده و 5000 امتیاز کسب خواهید کرد.
      </div>
      <Image
        alt="chegoonehozv"
        src="/images/chegoonehozv.jpg"
        width={500}
        height={500}
      />
    </div>
  );
}

export default ClubMember;
