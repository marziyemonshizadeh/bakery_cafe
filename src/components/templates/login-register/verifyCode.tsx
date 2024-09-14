"use client";
import { verifyCodeFormValues } from "@/types/typings";
import { VerifyCodeFormSchema } from "@/validators/verifyCodeRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
type VerifyCodeProps = {
  showloginForm: () => void;
};
export default function VerifyCode({ showloginForm }: VerifyCodeProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<verifyCodeFormValues>({
    resolver: zodResolver(VerifyCodeFormSchema),
  });
  const onSubmit: SubmitHandler<verifyCodeFormValues> = async (
    data: verifyCodeFormValues
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
          htmlFor="code"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          کد یکبار مصرف
        </label>
        <input
          type="code"
          id="code"
          placeholder="*****"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  outline-none block w-full p-2.5 dark:bg-[#332721] dark:border-[#eacfaa67] dark:placeholder-gray-400 dark:text-slate-200"
          {...register("code", { required: true })}
        />
        {errors.code && (
          <span className="text-[#413a2d]  dark:text-[#eacfaa] ">
            {errors.code.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full text-dark bg-zinc-300 hover:bg-primary-700 dark:bg-[#D1B48C] dark:text-[#413a2d] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        disabled={!isDirty || isSubmitting}
      >
        ورود
      </button>
      <p className="text-sm text-end font-light text-gray-500 dark:text-slate-200">
        حساب کاربری دارید؟
        <Link
          href="/login-register"
          className="font-medium hover:underline dark:hover:text-[#D1B48C]"
          onClick={showloginForm}
        >
          لاگین
        </Link>
      </p>
    </form>
  );
}
