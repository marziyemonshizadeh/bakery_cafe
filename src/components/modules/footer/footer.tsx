import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone,
  FaRegEnvelope,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import Article from "./article";

export default function Footer({}) {
  return (
    <footer className="bg-cover bg-[#e3ccad] text-black dark:bg-[#413a2d] dark:text-[#eacfaa]">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-12 leading-10 ">
        <section className="mx-auto">
          <h2 className="footerTitles">در تماس باش</h2>
          <div className="flex items-center gap-2">
            <FaLocationArrow className="icon" />
            تهران میدان ونک روبروی بانک تجارت
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="icon" />
            012 345 67890+
          </div>
          <div className="flex items-center gap-2">
            <FaRegEnvelope className="icon" />
            marziehmonshizade@yahoo.com
          </div>
          <div className="flex flex-row gap-4 my-3">
            <Link href="#">
              <FaTelegramPlane className="icon" />
            </Link>
            <Link href="#">
              <FaInstagram className="icon" />
            </Link>
            <Link href="#">
              <FaFacebookF className="icon" />
            </Link>
            <Link href="#">
              <FaWhatsapp className="icon" />
            </Link>
            <Link href="#">
              <FaLinkedinIn className="icon" />
            </Link>
          </div>
        </section>

        <section className="mx-auto">
          <h2 className="footerTitles">جدیدترین مقاله ها</h2>
          <Article
            src="#"
            imgUrl="/images/articles/ThebenefitsOfCoffee.webp"
            title="فواید قهوه"
            sub="28 بهمن 1402 بدون دیدگاه"
          />
          <Article
            src="#"
            imgUrl="/images/articles/AboutCoffee.jpg"
            title="همه چیز درباره قهوه "
            sub="28 بهمن 1402 بدون دیدگاه"
          />
        </section>

        <section className="mx-auto">
          <h2 className="footerTitles">دسترسی سریع</h2>
          <Link href="#" className="block hover:underline">
            شرایط و هزینه ارسال
          </Link>
          <Link href="#" className="block hover:underline">
            ثبت نظرات و شکایات
          </Link>
          <Link href="#" className="block hover:underline">
            حفظ حریم شخصی
          </Link>
          <Link href="#" className="block hover:underline">
            دیکشنری قهوه
          </Link>
          <Link href="#" className="block hover:underline">
            درباره ما
          </Link>
          <Link href="#" className="block hover:underline">
            تماس با ما
          </Link>
          <Link href="#" className="block hover:underline">
            باشگاه مشتریان
          </Link>
        </section>

        <section className="mx-auto">
          <h2 className="footerTitles">ساعات کاری</h2>
          <div>شنبه - چهارشنبه</div>
          <div>PM 8.00 -AM 8.00 </div>
          <div>پنج شنبه - جمعه</div>
          <div>PM 2.00 -PM 8.00 </div>
          <Image
            src="/images/promote/namad.png"
            alt="namad"
            width="120"
            height="120"
            className="w-auto h-auto"
          />
        </section>
      </div>
      <div className="border-t-[1px] border-slate-100 text-center py-4">
        © 2024 تمام حقوق متعلق است به | طراحی و اجرا{" "}
      </div>
    </footer>
  );
}
