import ContactForm from "@/components/templates/ContactUs/ContactForm";
import ContactInfo from "@/components/templates/ContactUs/ContactInfo";
import WeblogHeader from "@/components/templates/weblog/header";

type Props = {};

function ContactUs({}: Props) {
  return (
    <>
      <WeblogHeader title="تماس با ما" />
      <div className="mx-16 md:mx-0 flex flex-col md:flex-row justify-center gap-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}

export default ContactUs;
