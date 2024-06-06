"use client";

import { productFormValues } from "@/types/typings";
import { showSwal } from "@/utils/helpers";
import { SubmitHandler, useForm } from "react-hook-form";

function CommentForm({ productID, userID }: any) {
  const { register, reset, handleSubmit } = useForm<productFormValues>();
  const onSubmit: SubmitHandler<productFormValues> = async (data: any) => {
    if (!userID) {
      return showSwal(
        "لطفا اول لاگین کنید سپس نظر خود را ثبت کنید !",
        "error",
        "ok",
        "/login-register"
      );
    }
    let newdata = {
      ...data,
      productID: productID,
      userID: userID,
      date: Date.now(),
    };
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newdata),
    });
    if (res.status === 201) {
      showSwal("کامنت مورد نظر با موفقیت ثبت شد :)", "success", "ok", "#");
      reset();
    } else if (res.status === 422) {
      showSwal(
        "کاربری با این اطلاعات از قبل وجود دارد",
        "error",
        "تلاش مجدد",
        "#"
      );
    } else if (res.status === 500) {
      showSwal("مشکل از سرور", "error", "تلاش مجدد", "#");
    }
  };
  return (
    <div className="flex flex-col leading-10">
      <p className="font-bold">دیدگاه خود را بنویسید</p>
      <p>نشانی ایمیل شما منتشر نخواهد شد. </p>
      <form
        className="my-4 lg:w-96"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            امتیاز شما
          </label>
          <div className="relative mb-4">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 p-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              {...register("score", { required: true })}
            >
              <option value={5}>5</option>
              <option value={4}>4</option>
              <option value={3}>3</option>
              <option value={2}>2</option>
              <option value={1}>1</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
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
