"use client";

import { showSwal } from "@/utils/helpers";
import {
  LogInFormSchemaType,
  LoginFormSchema,
} from "@/validators/loginFormRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
const swal = require("sweetalert");

type LoginProps = {
  showRegisterForm: () => void;
  showSmsForm: () => void;
  showForgetPassForm: () => void;
};

export default function Login({
  showRegisterForm,
  showSmsForm,
  showForgetPassForm,
}: LoginProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LogInFormSchemaType>({ resolver: zodResolver(LoginFormSchema) });
  const onSubmit: SubmitHandler<LogInFormSchemaType> = async (
    data: LogInFormSchemaType
  ) => {
    await fetch("api/auth/logIn", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          swal({
            title: " با موفقیت لاگین شدید",
            icon: "success",
            button: "ورود به سایت",
          }).then(() => {
            reset();
            location.replace("/");
          });
        } else if (res.status === 401 || res.status === 422) {
          showSwal(
            "کاربری با این اطلاعات وجود ندارد",
            "error",
            "تلاش مجدد",
            "#"
          );
        } else if (res.status === 500) {
          showSwal("مشکل از سرور", "error", "تلاش مجدد", "#");
        } else if (res.status === 419) {
          showSwal("ایمیل یا پسورد صحیح نیست ", "error", "تلاش مجدد", "#");
        }
        return res.json();
      })
      .catch((err) => console.log("can not sent message", err));
  };
  return (
    <form
      className="p-6 space-y-4 md:space-y-6 sm:p-8"
      action="#"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Link href="/">
        <FaArrowLeftLong className="float-left" />
      </Link>

      <div>
        <label
          htmlFor="identifier"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-200"
        >
          ایمیل / شماره موبایل
        </label>
        <input
          type="identifier"
          id="identifier"
          placeholder=""
          className="bg-[#d3ccbe] border border-gray-300 text-[#332721] sm:text-sm rounded-lg  outline-none  block w-full p-2.5 border-[#eacfaa67] dark:placeholder-gray-400"
          {...register("identifier", { required: true })}
        />
        {errors.identifier && (
          <span className="text-[#413a2d]  dark:text-[#eacfaa] ">
            {(errors.identifier as any)?.required?.message ||
              errors?.identifier?.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-200"
        >
          گذرواژه
        </label>
        <input
          type="password"
          id="password"
          // placeholder="••••••••"
          placeholder=""
          className="bg-[#d3ccbe] border border-gray-300 text-[#332721] sm:text-sm rounded-lg  outline-none  block w-full p-2.5 border-[#eacfaa67] dark:placeholder-gray-400"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-[#f0ede8]">{errors.password.message}</span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <Link
              href="/login-register"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-slate-200 dark:hover:text-[#D1B48C]"
              onClick={showForgetPassForm}
            >
              فراموشی رمز عبور؟
            </Link>
          </div>
        </div>
        <div className="text-sm font-medium flex items-center">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            className="w-4 h-4 accent-[#413a2d] dark:accent-[#D1B48C] border border-gray-300  dark:border-[#eacfaa] rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            {...register("remember")}
          />
          <label
            htmlFor="remember"
            className="text-[#413a2d] dark:text-gray-300 ms-1"
          >
            مرا بخاطر بسپار
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-dark bg-[#D1B48C] hover:bg-primary-700 dark:bg-[#D1B48C] dark:text-[#413a2d] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        ورود
      </button>
      <div className="flex justify-between text-sm text-end font-medium text-black dark:text-slate-200">
        <p>
          حساب کاربری ندارید؟
          <Link
            href="/login-register"
            className="font-medium text-primary-600 hover:underline dark:hover:text-[#D1B48C]"
            onClick={showRegisterForm}
          >
            ثبت نام
          </Link>
        </p>
        <Link
          href="/login-register"
          className="font-medium text-primary-600 hover:underline dark:text-slate-200 dark:hover:text-[#D1B48C]"
          onClick={showSmsForm}
        >
          ورود با کد یکبار مصرف
        </Link>
      </div>
    </form>
  );
}
