import ContactForm from "@/components/templates/ContactUs/ContactForm";
import ContactInfo from "@/components/templates/ContactUs/ContactInfo";
import WeblogHeader from "@/components/templates/weblog/header";
import dynamic from "next/dynamic";
import Link from "next/link";
// const MyMap = dynamic(() => import("@/components/templates/ContactUs/map"), {
//   ssr: false,
// });
const MyMap = dynamic(() => import("@/components/templates/ContactUs/map"), {
  ssr: false,
});

type Props = {};

function ContactUs({}: Props) {
  return (
    <>
      <WeblogHeader title="تماس با ما" />
      <div className="flex justify-center items-center md:flex-row flex-col lg:gap-20 md:gap-13 gap-10 md:m-24  my-16">
        <MyMap
          position={[35.72021225108499, 51.42222691580869]}
          center={[35.72021225108499, 51.42222691580869]}
        >
          <h3 className="text-[#413a2d] dark:text-white font-semibold">
            شعبه 1
          </h3>
          <p className="text-[#413a2d] dark:text-orange-100">
            تهران - خ انقلاب بین میدان فردوسی و چهار راه کالج روبروی خ ویلا
            شماره ۸۵۲
          </p>
          <p className="text-[#413a2d] dark:text-orange-100 py-2">
            021-66726563
          </p>
          <Link
            href="#"
            className="hover:underline font-bold text-[#413a2d] dark:text-white"
          >
            درباره فروشگاه
          </Link>
        </MyMap>
        <MyMap
          position={[35.72021225108499, 51.42222691580869]}
          center={[35.72021225108499, 51.42222691580869]}
        >
          <h3 className="text-[#413a2d] dark:text-white font-semibold">
            شعبه 2
          </h3>
          <p className="text-[#413a2d] dark:text-orange-100">
            تهران - خ انقلاب بین میدان فردوسی و چهار راه کالج روبروی خ ویلا
            شماره ۸۵۲
          </p>
          <p className="text-[#413a2d] dark:text-orange-100 py-2">
            021-66726563
          </p>
          <Link
            href="#"
            className="hover:underline font-bold text-[#413a2d] dark:text-white"
          >
            درباره فروشگاه
          </Link>
        </MyMap>
      </div>

      <div className="mx-16 md:mx-0 flex flex-col md:flex-row justify-center gap-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}

export default ContactUs;
