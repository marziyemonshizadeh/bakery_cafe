"use client";

import { productFormValues } from "@/types/typings";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";

type Props = {};

function CommentForm({}: Props) {
  const { register, reset, handleSubmit } = useForm<productFormValues>();
  const onSubmit: SubmitHandler<productFormValues> = async (data: any) => {
    console.log("data", data);
    reset();
  };
  return (
    <div className="flex flex-col leading-10 min-w-[600px]">
      <p className="font-bold">دیدگاه خود را بنویسید</p>
      <p>نشانی ایمیل شما منتشر نخواهد شد. </p>
      <div className="flex items-center gap-2">
        <p>امتیاز شما :</p>
        <div className="flex">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
        </div>
      </div>
      <form className="my-4" action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#eacfaa] dark:focus:border-[#eacfaa] focus:outline-none focus:ring-0 focus:border-[#413a2d] peer"
            placeholder=""
            {...register("name", { required: true })}
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#413a2d] peer-focus:dark:text-[#eacfaa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            نام و نام خانوادگی
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#eacfaa] dark:focus:border-[#eacfaa] focus:outline-none focus:ring-0 focus:border-[#413a2d] peer"
            placeholder=" "
            required
            {...register("email", { required: true })}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#413a2d] peer-focus:dark:text-[#eacfaa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            آدرس ایمیل
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-[#eddbc2]"
          >
            دیدگاه شما
          </label>
          <textarea
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:focus:border-[#eacfaa] focus:border-[#413a2d] focus:ring-blue-500  dark:bg-gray-700 dark:border-[#bda583] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
            placeholder="..."
            {...register("message", { required: true })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-[#eacfaa] dark:text-[#413a2d] bg-[#413a2d] dark:bg-[#eacfaa]  hover:bg-[#4d4435] focus:ring-1 focus:outline-none focus:ring-[#eacfaa] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:hover:bg-[#f6dcb8] dark:focus:ring-blue-800"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
