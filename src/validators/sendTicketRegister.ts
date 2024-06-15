import { sendTicketFormValues } from "@/types/typings";
import { ZodType, z } from "zod";

export const SendTicketFormSchema: ZodType<sendTicketFormValues> = z.object({
  department: z
    .string({ message: " فیلد اجباری می باشد" })
    .nonempty("دپارتمان فیلد اجباری می باشد"),
  subDepartment: z
    .string({ message: " فیلد اجباری می باشد" })
    .min(1, { message: " فیلد اجباری می باشد" }),
  title: z
    .string()
    .min(1, { message: " فیلد اجباری می باشد" })
    .max(13, { message: " عنوان تیکت نباید بیش از 13 کاراکتر باشد" }),
  priority: z.number().min(1, { message: " فیلد اجباری می باشد" }).max(3),
  message: z
    .string()
    .min(1, { message: " فیلد اجباری می باشد" })
    .max(350, { message: "نباید پیام از 350 کاراکتر بیشتر باشد" }),
});
