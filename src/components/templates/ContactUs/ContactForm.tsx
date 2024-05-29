"use client";

import { contactFormValues } from "@/types/typings";
import { validateEmail, validatePhone, validateUserName } from "@/utils/auth";
import { showSwal } from "@/utils/helpers";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, reset, handleSubmit } = useForm<contactFormValues>();
  const onSubmit: SubmitHandler<contactFormValues> = async (data: any) => {
    const isValidUserName = validateUserName(data.fullName);
    if (!isValidUserName) {
      return showSwal(
        "نام  باید حداقل 5 و حداکثر 16 کاراکتر داشته باشد",
        "error",
        "تلاش مجدد ",
        "#"
      );
    }

    const isValidPhone = validatePhone(data.phoneNumber);
    if (!isValidPhone) {
      return showSwal(
        "شماره تماس وارد شده معتبر نیست",
        "error",
        "تلاش مجدد ",
        "#"
      );
    }

    const isValidEmail = validateEmail(data.email);
    if (!isValidEmail) {
      return showSwal("ایمیل وارد شده معتبر نیست", "error", "تلاش مجدد ", "#");
    }
    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 201) {
      showSwal(" پیام مورد نظر با موفقیت ارسال شد", "success", "فهمیدم", "#");
      reset();
    }
  };
  return (
    <div className="flex flex-col leading-10">
      <div className="text-slate-400">فرم تماس با ما</div>
      <h2 className="text-2xl font-extrabold text-black dark:text-white">
        برای تماس با ما می توانید فرم زیر را تکمیل کنید
      </h2>
      <form className="my-4" action="#" onSubmit={handleSubmit(onSubmit)}>
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
          <input
            type="fullName"
            id="fullName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#eacfaa] dark:focus:border-[#eacfaa] focus:outline-none focus:ring-0 focus:border-[#413a2d] peer"
            placeholder=""
            {...register("fullName", { required: true })}
          />
          <label
            htmlFor="fullName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#413a2d] peer-focus:dark:text-[#eacfaa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            نام و نام خانوادگی
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#eacfaa] dark:focus:border-[#eacfaa] focus:outline-none focus:ring-0 focus:border-[#413a2d] peer"
              placeholder=" "
              {...register("phoneNumber", { required: true })}
            />
            <label
              htmlFor="phoneNumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#413a2d] peer-focus:dark:text-[#eacfaa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              شماره تماس
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="companyName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#eacfaa] dark:focus:border-[#eacfaa] focus:outline-none focus:ring-0 focus:border-[#413a2d] peer"
              placeholder=" "
              {...register("companyName")}
            />
            <label
              htmlFor="companyName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#413a2d] peer-focus:dark:text-[#eacfaa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              نام شرکت
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-[#eddbc2]"
          >
            درخواست شما
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
          className="text-[#eacfaa] dark:text-[#413a2d]  bg-[#413a2d] dark:bg-[#eacfaa]  hover:bg-[#4d4435] focus:ring-1 focus:outline-none focus:ring-[#eacfaa] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:hover:bg-[#f6dcb8] dark:focus:ring-blue-800"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}
