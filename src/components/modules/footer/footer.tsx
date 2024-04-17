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
    <footer className="bg-cover bg-[#D1B48C] text-black">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-12 leading-10 ">
        <section className="mx-auto">
          <h2 className="font-mono text-2xl font-bold">در تماس باش</h2>
          <div className="flex items-center gap-2">
            <FaLocationArrow />
            تهران میدان ونک روبروی بانک تجارت
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            012 345 67890+
          </div>
          <div className="flex items-center gap-2">
            <FaRegEnvelope />
            marziehmonshizade@yahoo.com
          </div>
          <div className="flex flex-row gap-4 my-3">
            <Link href="#">
              <FaTelegramPlane className="hover:text-orange-800 text-xl" />
            </Link>
            <Link href="#">
              <FaInstagram className="hover:text-orange-800  text-xl" />
            </Link>
            <Link href="#">
              <FaFacebookF className="hover:text-orange-800  text-xl" />
            </Link>
            <Link href="#">
              <FaWhatsapp className="hover:text-orange-800  text-xl" />
            </Link>
            <Link href="#">
              <FaLinkedinIn className="hover:text-orange-800  text-xl" />
            </Link>
          </div>
        </section>

        <section className="mx-auto">
          <h2 className="font-mono text-2xl font-bold">جدیدترین مقاله ها</h2>
          <Article
            src="#"
            imgUrl="/hot chocolate.jpg"
            title="تحقیق ژنوم پیچیده قهوه عربیکا"
            sub="28 بهمن 1402 بدون دیدگاه"
          />
          <Article
            src="#"
            imgUrl="/hot chocolate.jpg"
            title="تحقیق ژنوم پیچیده قهوه عربیکا"
            sub="28 بهمن 1402 بدون دیدگاه"
          />
        </section>

        <section className="mx-auto">
          <h2 className="font-mono text-2xl font-bold">دسترسی سریع</h2>
          <Link href="#" className="block">
            شرایط و هزینه ارسال
          </Link>
          <Link href="#" className="block">
            ثبت نظرات و شکایات
          </Link>
          <Link href="#" className="block">
            حفظ حریم شخصی
          </Link>
          <Link href="#" className="block">
            دیکشنری قهوه
          </Link>
          <Link href="#" className="block">
            درباره ما
          </Link>
          <Link href="#" className="block">
            تماس با ما
          </Link>
          <Link href="#" className="block">
            باشگاه مشتریان
          </Link>
        </section>

        <section className="mx-auto">
          <h2 className="font-mono text-2xl font-bold">ساعات کاری</h2>
          <div>شنبه - چهارشنبه</div>
          <div>PM 8.00 -AM 8.00 </div>
          <div>پنج شنبه - جمعه</div>
          <div>PM 2.00 -PM 8.00 </div>
          <Image src="/namad.png" alt="namad" width="150" height="150" />
        </section>
      </div>
      <div className="border-t-[1px] border-slate-100 text-center py-4">
        © 2024 تمام حقوق متعلق است به{" "}
        <span className="font-bold">مرضیه منشی زاده کریمی </span> | طراحی و اجرا{" "}
        <span className="font-bold">مرضیه منشی زاده کریمی </span>{" "}
      </div>
    </footer>
  );
}
