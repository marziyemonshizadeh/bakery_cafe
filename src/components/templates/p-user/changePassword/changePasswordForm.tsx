"use client";
import { changePasswordValues } from "@/types/typings";
import { SubmitHandler, useForm } from "react-hook-form";
const swal = require("sweetalert");

type Props = {};

function ChangePasswordForm({}: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<changePasswordValues>();
  const onSubmit: SubmitHandler<changePasswordValues> = async (data: any) => {
    console.log("submited", data);
    const res = await fetch("/api/changePass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      reset();
      swal({
        title: "رمز عبور شما با موفقیت تغییر کرد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(async () => {
        await fetch("/api/auth/logOut", { method: "POST" });
        location.replace("/login-register");
      });
    }
  };
  return (
    <form
      className="max-w-2xl mx-auto flex flex-col items-center gap-2 my-14 p-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-7 w-full">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-white"
        >
          رمز عبور جدید
        </label>
        <input
          type="password"
          id="password"
          placeholder="********"
          className="bg-gray-50 border border-gray-300 text-[#413a2d] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
        />
        {errors.password && (
          <div className="text-[#413a2d]">
            رمز عبور شما معتبر نیست رمز عبور حداقل باید 8 کاراکتر که شامل
            کاراکتر کوچک ، کاراکتر بزرگ و عدد باشد
          </div>
        )}
      </div>
      <button
        className="bg-[#413a2d] dark:bg-[#eacfaa] text-[#eacfaa] dark:text-[#413a2d] font-bold py-2 rounded p-3"
        disabled={!isDirty || isSubmitting}
      >
        تغییر رمز عبور
      </button>
    </form>
  );
}

export default ChangePasswordForm;
