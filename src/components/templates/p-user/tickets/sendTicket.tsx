"use client";

import { useGetDepartments } from "@/hooks/getDepartments";
import { sendTicketFormValues } from "@/types/typings";
import { showSwal } from "@/utils/helpers";
import { SendTicketFormSchema } from "@/validators/sendTicketRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

function SendTicket() {
  const { data } = useGetDepartments();

  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting, errors },
  } = useForm<sendTicketFormValues>({
    resolver: zodResolver(SendTicketFormSchema),
  });

  const onSubmit: SubmitHandler<sendTicketFormValues> = async (
    data: sendTicketFormValues
  ) => {
    console.log("submited", data);

    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      reset();
      showSwal(
        "تیکت شما با موفقیت ارسال شد به زودی پاسخ آنرا دریافت خواهید کرد",
        "success",
        "اوکی",
        "#"
      );
    }
  };
  return (
    <form className="my-14" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-5">
        <div className="mb-5">
          <label
            htmlFor="department"
            className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-white"
          >
            دپارتمان مورد نظر را انتخاب کنید :
          </label>
          <select
            id="department"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-950 focus:border-orange-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
            // defaultValue={"DEFAULT"}
            required
            {...register("department", { required: true })}
          >
            <option value={-1}>لطفا یک مورد را انتخاب کنید :</option>
            {data?.map((department: any, index) => {
              return (
                <option value={department?._id} key={index + 1}>
                  {department?.title}
                </option>
              );
            })}
          </select>
          {errors.department && (
            <span className="text-red-500">{errors.department.message}</span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="subDepartment"
            className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-white"
          >
            نوع تیکت را انتخاب کنید :
          </label>
          <select
            id="subDepartment"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-950 focus:border-orange-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-whiring-white"
            defaultValue={"DEFAULT"}
            required
            {...register("subDepartment", { required: true })}
          >
            <option value="DEFAULT" disabled>
              لطفا یک مورد را انتخاب کنید :
            </option>
            <option value="6664750d735004e5e0278451">مالی</option>
            <option value="6664731e735004e5e0278449">پشتیبانی</option>
          </select>
          {errors.subDepartment && (
            <span className="text-red-500">{errors.subDepartment.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-white"
          >
            عنوان تیکت را وارد کنید :
          </label>
          <input
            type="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-[#413a2d] text-sm rounded-lg focus:ring-orange-950 focus:border-orange-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
            required
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="priority"
            className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-white"
          >
            سطح اولویت تیکت را وارد کنید:
          </label>
          <select
            id="priority"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-950 focus:border-orange-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
            defaultValue={1}
            {...register("priority", { required: true, valueAsNumber: true })}
          >
            <option value={3}>زیاد</option>
            <option value={2}>متوسط</option>
            <option value={1}>کم</option>
          </select>
          {errors.priority && (
            <span className="text-red-500">{errors.priority.message}</span>
          )}
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          محتوای تیکت را وارد کنید:
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-950 focus:border-orange-950 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}
      </div>

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">برای آپلود کلیک کنید</span> یا
              فایل مورد نظر را بکشید و رها کنید
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              فرمت های مجاز : SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              حداکثر اندازه : 6 مگا بایت
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <button
        type="submit"
        className={` mx-auto block text-[#eacfaa] dark:text-[#413a2d] focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 m-4 text-center ${
          !isDirty || !isValid || isSubmitting
            ? "bg-[#413a2dec]"
            : "bg-[#413a2d] dark:bg-[#eacfaa] hover:bg-[#4d4435] focus:ring-1 focus:ring-[#eacfaa] dark:hover:bg-[#f6dcb8] dark:focus:ring-blue-800"
        }`}
        // disabled={!isDirty || !isValid || isSubmitting}
      >
        ثبت تیکت
      </button>
    </form>
  );
}

export default SendTicket;
