import { loginFormValues } from "@/types/typings";
import { ZodType, z } from "zod";

export const LoginFormSchema: ZodType<loginFormValues> = z.object({
  identifier: z
    .string()
    .min(1, {
      message:
        "فیلد اجباری می باشد لطفا شماره موبایل یا ایمیل خود را وارد کنید",
    })
    .or(z.number()),
  password: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  remember: z.boolean(),
});
