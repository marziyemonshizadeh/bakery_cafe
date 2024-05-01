"use client";
import { forgetPasswordFormValues } from "@/types/typings";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {
  showloginForm: () => void;
  showRegisterForm: () => void;
  showSetNewPasswordForm: () => void;
};
function ForgetPas({
  showloginForm,
  showRegisterForm,
  showSetNewPasswordForm,
}: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<forgetPasswordFormValues>();
  const onSubmit: SubmitHandler<forgetPasswordFormValues> = async (
    data: any
  ) => {
    showSetNewPasswordForm;
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
          htmlFor="identifier"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ایمیل / شماره موبایل
        </label>
        <input
          type="identifier"
          id="identifier"
          placeholder="*******0935"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("identifier", { required: true })}
        />
        {errors.identifier && <div className="text-pink-700">...</div>}
      </div>
      <button
        type="submit"
        className="w-full text-dark bg-zinc-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        ارسال کد
      </button>
      <div className="text-sm flex justify-between font-light text-gray-500 dark:text-gray-400">
        <Link
          href="/login-register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          onClick={showRegisterForm}
        >
          ثبت نام
        </Link>
        <Link
          href="/login-register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          onClick={showloginForm}
        >
          لاگین
        </Link>
        <Link
          href="/login-register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          onClick={showSetNewPasswordForm}
        >
          تغییر رمز
        </Link>
      </div>
    </form>
  );
}

export default ForgetPas;
