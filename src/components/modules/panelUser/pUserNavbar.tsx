import { authUser } from "@/utils/serverHelpers";
import { IoIosSunny, IoMdNotificationsOutline } from "react-icons/io";

type Props = { userName: string; role: string };

async function PanelUserNavbar({ userName, role }: Props) {
  const user = await authUser();

  return (
    <div className="flex items-center justify-between bg-slate-50 dark:bg-gray-700">
      <div className="flex items-center gap-2">
        <img
          src="https://img.freepik.com/free-photo/woman-with-beauty-face-clean-skin_186202-5677.jpg"
          alt="profile"
          className="w-14 h-14 rounded-full"
        />
        <div>
          <p className="text-black font-bold text-xl">{userName}</p>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#711d1c0f] p-2 rounded-xl flex justify-center items-center">
          <IoMdNotificationsOutline className="w-6 h-6 icon" />
        </div>
        <button className="w-10 h-10 bg-[#711d1c0f] p-2 rounded-xl flex justify-center items-center">
          <IoIosSunny className="w-6 h-6 icon" />
        </button>
      </div>
    </div>
  );
}

export default PanelUserNavbar;
