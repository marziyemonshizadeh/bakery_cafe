import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

function SocialMedia() {
  return (
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
  );
}

export default SocialMedia;
