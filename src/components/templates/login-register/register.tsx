"use client";

import { registerFormValues } from "@/types/typings";

import { showSwal } from "@/utils/helpers";
import { signUpFormSchema } from "@/validators/signUpFormRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
const swal = require("sweetalert");

type RegisterProps = {
  showloginForm: () => void;
};
export default function Register({ showloginForm }: RegisterProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<registerFormValues>({ resolver: zodResolver(signUpFormSchema) });
  const onSubmit: SubmitHandler<registerFormValues> = async (
    data: registerFormValues
  ) => {
    const res = await fetch("api/auth/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 201) {
      swal({
        title: "ثبت نام با موفقیت انجام شد",
        icon: "success",
        button: "ورود به  صفحه ی اصلی",
      }).then(() => {
        reset();
        location.replace("/");
      });

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
    <form
      className="p-6 space-y-4 md:space-y-6 sm:p-8"
      action="#"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="userName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          نام کاربری
        </label>
        <input
          type="userName"
          id="userName"
          placeholder=" نام کاربری"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("userName", { required: true })}
        />
        {errors.userName && (
          <span className="text-red-500">{errors.userName.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ایمیل
        </label>
        <input
          type="email"
          id="email"
          placeholder="name@company.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

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
        {errors.phoneNumber && (
          <span className="text-red-500">{errors.phoneNumber.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          گذرواژه
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full text-dark bg-zinc-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        disabled={!isDirty || isSubmitting}
      >
        ثبت نام
      </button>
      <p className="text-sm text-end font-light text-gray-500 dark:text-gray-400">
        حساب کاربری دارید؟
        <Link
          href="/login-register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          onClick={showloginForm}
        >
          لاگین
        </Link>
      </p>
    </form>
  );
}
