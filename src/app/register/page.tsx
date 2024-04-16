"use client";
import { registerFormValues } from "@/types/typings";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {};

function Register({}: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<registerFormValues>();
  const onSubmit: SubmitHandler<registerFormValues> = async (data: any) => {
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
    console.log("data =", data);
  };
  return (
    <section
      className="bg-gray-50 dark:bg-gray-900"
      style={{
        backgroundImage: 'url("/images/promote/promote.jpg")',
        objectFit: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <form
            className="p-6 space-y-4 md:space-y-6 sm:p-8"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                نام و نام خانوادگی
              </label>
              <input
                type="fullName"
                id="fullName"
                placeholder="  نام و نام خانوادگی"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && <div className="text-pink-700">...</div>}
            </div>

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
              {errors.userName && <div className="text-pink-700">...</div>}
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
              {errors.email && <div className="text-pink-700">...</div>}
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
              {errors.phoneNumber && <div className="text-pink-700">...</div>}
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
              {errors.password && <div className="text-pink-700">...</div>}
            </div>

            <button
              type="submit"
              className="w-full text-dark bg-zinc-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              ثبت نام
            </button>
            <p className="text-sm text-end font-light text-gray-500 dark:text-gray-400">
              حساب کاربری دارید؟
              <Link
                href="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                لاگین
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
