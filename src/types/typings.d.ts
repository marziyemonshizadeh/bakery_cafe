// export interface loginFormValues {
//   identifier: string | number;
//   password: string;
//   remember: boolean | undefined;
// }
export interface registerFormValues {
  userName: string;
  password: string;
  email: string;
  phoneNumber: string;
}
export interface loginByPhoneNumberFormValues {
  phoneNumber: number;
}
export interface verifyCodeFormValues {
  code: number;
}
export interface forgetPasswordFormValues {
  phoneNumber: number | string;
}
export interface setNewPasswordFormValues {
  code: number;
  password: string;
}
export interface contactFormValues {
  email: string;
  fullName: string;
  phoneNumber: string;
  companyName?: string | undefined;
  message: string;
}
export interface productFormValues {
  email: string;
  name: string;
  score: number;
  message: string;
}
export interface accountDetailsFormValues {
  email: string;
  userName: string;
  phoneNumber: string;
}
export interface sendTicketFormValues {
  title: string;
  message: string;
  department: string;
  subDepartment: string;
  priority: number | undefined;
}
export interface changePasswordValues {
  password: string;
}
