"use client";
import { loginByPhoneNumberFormValues } from "@/types/typings";
import { SubmitHandler, useForm } from "react-hook-form";

export default function SendSms() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<loginByPhoneNumberFormValues>();
  const onSubmit: SubmitHandler<loginByPhoneNumberFormValues> = async (
    data: any
  ) => {
    await fetch("api/messages", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("ok = ", res);
          reset();
        } else if (res.status === 422) {
        } else if (res.status === 404) {
        } else if (res.status === 500) {
        }
        return res.json();
      })
      .catch((err) => console.log("can not sent message", err));
    console.log("data=", data);
  };
  return (
    <form
      className="p-6 space-y-4 md:space-y-6 sm:p-8"
      action="#"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="phoneNumber"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          شماره موبایل
        </label>
        <input
          type="phoneNumber"
          id="phoneNumber"
          placeholder="*******0935"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && <div className="text-pink-700">...</div>}
      </div>

      <div>
        <label
          htmlFor="code"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          کد یکبار مصرف
        </label>
        <input
          type="code"
          id="code"
          placeholder="*******0935"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("code", { required: true })}
        />
        {errors.code && <div className="text-pink-700">...</div>}
      </div>

      <button
        type="submit"
        className="w-full text-dark bg-zinc-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        ورود
      </button>
    </form>
  );
}
