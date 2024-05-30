import HomePageLayout from "@/components/layouts/homePageLayout";
import ContactForm from "@/components/templates/ContactUs/ContactForm";
import WeblogHeader from "@/components/templates/weblog/header";
import { FaPhone } from "react-icons/fa";

async function RegisterComplaints() {
  return (
    <HomePageLayout>
      <WeblogHeader title="ثبت شکایات" />
      <h2 className="font-bold text-xl text-center p-6">
        ثبت شکایات، انتقادات و پیشنهادات فروشگاه قهوه ست
      </h2>
      <div className="mx-16 md:mx-0 flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="max-w-[500px] leading-10">
          مشتری گرامی شما علاوه بر تکمیل فرم روبرو، می توانید از طریق روش های
          زیر و همچنین از طریق صفحه تماس با ما، برای انتقال شکایات، انتقادات و
          پیشنهادات خود با تیم مدیریت در ارتباط باشید.
          <br />
          ما صمیمانه منتظر شنیدن انتقادات و پیشنهادات شما هستیم.
          <div className="flex items-center gap-2">
            <FaPhone className="icon" />
            01234567890
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="icon" />
            01234567890
          </div>
        </div>
        <ContactForm />
      </div>
    </HomePageLayout>
  );
}

export default RegisterComplaints;
