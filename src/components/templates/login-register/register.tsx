"use client";

import { registerFormValues } from "@/types/typings";
import {
  validateEmail,
  validatePassword,
  validatePhone,
  validateUserName,
} from "@/utils/auth";
import { showSwal } from "@/utils/helpers";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
const swal = require("sweetalert");

type Props = {
  showloginForm: () => void;
};
export default function Register({ showloginForm }: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<registerFormValues>();
  const onSubmit: SubmitHandler<registerFormValues> = async (data: any) => {
    if (!data.userName.trim()) {
      return showSwal("نام را وارد بکنید", "error", "تلاش مجدد", "#");
    }

    const isValidUserName = validateUserName(data.userName);
    if (!isValidUserName) {
      return showSwal(
        "نام کاربری باید حداقل 5 و حداکثر 16 کاراکتر داشته باشد",
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

    const isValidPassword = validatePassword(data.password);
    if (!isValidPassword) {
      return showSwal(
        "لطفا رمز عبور امن تری را وارد کنید !",
        "error",
        "تلاش مجدد ",
        "#"
      );
    }

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
        button: "ورود به پنل کاربری",
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
      </div>

      <button
        type="submit"
        className="w-full text-dark bg-zinc-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        disabled={!isDirty || !isValid || isSubmitting}
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
