import { accountDetailsFormValues } from "@/types/typings";
import { ZodType, z } from "zod";

export const AccountDetailsFormSchema: ZodType<accountDetailsFormValues> =
  z.object({
    email: z
      .string()
      .min(5, { message: "فیلد اجباری می باشد" })
      .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, {
        message: "ایمیل شما معتبر نمی باشد",
      }),
    userName: z.string().min(5, {
      message:
        " فیلد اجباری می باشد نام کاربری باید بیشتر از 5 کاراکتر داشته باشد",
    }),
    phoneNumber: z
      .string()
      .min(1, { message: "فیلد اجباری می باشد" })
      .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
        message: "شماره موبایل شما معتبر نمی باشد",
      }),
  });
