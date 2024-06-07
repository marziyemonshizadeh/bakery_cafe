"use client";
import { accountDetailsFormValues } from "@/types/typings";
import { SubmitHandler, useForm } from "react-hook-form";
const swal = require("sweetalert");

type AccountDetailsFormProps = { user: any };

function AccountDetailsForm({ user }: AccountDetailsFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<accountDetailsFormValues>({
    defaultValues: {
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },
  });
  const onSubmit: SubmitHandler<accountDetailsFormValues> = async (
    data: any
  ) => {
    console.log("submited", data);
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      reset();
      swal({
        title: " با موفقیت لاگین شدید",
        icon: "success",
        buttons: "فهمیدم",
      }).then(async () => {
        await fetch("/api/auth/logOut", { method: "POST" });
        location.replace("/login-register");
      });
    }
  };
  return (
    <>
      <form
        className="max-w-sm mx-auto my-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <label
            htmlFor="userName"
            className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-white"
          >
            نام کاربری
          </label>
          <input
            type="text"
            id="userName"
            className="bg-gray-50 border border-gray-300 text-[#413a2d] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register("userName", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-white"
          >
            آدرس ایمیل
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-[#413a2d] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register("email", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="tel"
            className="block mb-2 text-sm font-medium text-[#413a2d] dark:text-white"
          >
            شماره تماس
          </label>
          <input
            type="tel"
            id="tel"
            className="bg-gray-50 border border-gray-300 text-[#413a2d] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={user.phoneNumber}
            defaultValue={user.phoneNumber}
            required
            {...register("phoneNumber", { required: true })}
          />
        </div>

        <button
          type="submit"
          className={`text-[#eacfaa] dark:text-[#413a2d]   ${
            !isDirty || !isValid || isSubmitting
              ? "bg-[#413a2dec]"
              : "bg-[#413a2d] dark:bg-[#eacfaa] hover:bg-[#4d4435] focus:ring-1 focus:ring-[#eacfaa] dark:hover:bg-[#f6dcb8] dark:focus:ring-blue-800"
          }   focus:outline-none  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center`}
          disabled={!isDirty || !isValid || isSubmitting}
        >
          ثبت تغییرات
        </button>
      </form>
    </>
  );
}

export default AccountDetailsForm;
