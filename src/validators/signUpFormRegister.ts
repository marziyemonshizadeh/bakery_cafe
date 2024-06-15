import { registerFormValues } from "@/types/typings";
import { ZodType, z } from "zod";

export const signUpFormSchema: ZodType<registerFormValues> = z.object({
  userName: z
    .string()
    .min(3, { message: "فیلد اجباری می باشد" })
    .max(15, {
      message: "نام کاربری نباید کمتر از 3 و بیشتراز 15 کاراکتر باشد",
    })
    .regex(/^[a-z0-9_-]{3,15}$/, { message: "نام کاربری شما معتبر نمی باشد" }),
  password: z
    .string()
    .min(5, { message: "فیلد اجباری می باشد" })
    .max(15, { message: "رمز عبور نباید کمتراز 5 و بیش از 15 کاراکتر باشد" }),
  // .regex(/^[a-z0-9_-]{5,15}$/, {
  //   message:
  //     "رمز عبور باید شامل حداقل حروف کوچک و بزرگ، یک کاراکتر خاص و عدد باشد",
  // })
  email: z.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, {
    message: "ایمیل شما معتبر نمی باشد",
  }),
  phoneNumber: z.string().min(1, { message: "فیلد اجباری می باشد" }).max(12, {
    message: "شماره موبایل نباید کمتر از 6 و بیش از 12 کاراکتر باشد",
  }),
});
