"use client";

import { loginByPhoneNumberFormValues } from "@/types/typings";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
type SendSmsProps = {
  showloginForm: () => void;
  showVerifyCodeForm: () => void;
};
export default function SendSms({
  showloginForm,
  showVerifyCodeForm,
}: SendSmsProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<loginByPhoneNumberFormValues>();
  const onSubmit: SubmitHandler<loginByPhoneNumberFormValues> = async (
    data: loginByPhoneNumberFormValues
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
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  outline-none block w-full p-2.5 dark:bg-[#332721] dark:border-[#eacfaa67] dark:placeholder-gray-400 dark:text-slate-200"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && (
          <div className="text-[#413a2d]  dark:text-[#eacfaa] ">
            شماره موبایل فیلد اجباری می باشد
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full text-dark bg-zinc-300 hover:bg-primary-700 dark:bg-[#D1B48C] dark:text-[#413a2d] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        disabled={!isDirty || isSubmitting}
      >
        ارسال کد
      </button>
      <div className="text-sm flex justify-between font-light">
        <Link
          href="/login-register"
          className="font-medium text-gray-500 hover:underline dark:hover:text-[#eacfaa] dark:text-slate-200"
          onClick={showloginForm}
        >
          لاگین
        </Link>
        <Link
          href="/login-register"
          className="font-medium text-gray-500 hover:underline dark:hover:text-[#eacfaa] dark:text-slate-200"
          onClick={showVerifyCodeForm}
        >
          verifyCode
        </Link>
      </div>
    </form>
  );
}
