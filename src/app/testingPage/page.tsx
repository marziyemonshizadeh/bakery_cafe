"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

function Test({}: Props) {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="bg-red-900 text-black">
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20"
          } bg-indigo-800 h-screen p-5 pt-8 relative duration-300`}
        >
          <IoIosArrowForward
            className={`absolute cursor-pointer top-9 w-7 border-dark-purple
           border-2 rounded-full duration-300 ${!open && "rotate-180"} ${
              open ? "right-[272px]" : "right-16 "
            }`}
            onClick={() => setOpen(!open)}
          />
          {/* linkes */}
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 `}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
          <h1 className="text-2xl font-semibold ">Home Page</h1>
        </div>
      </div>
    </div>
  );
}

export default Test;
