export interface loginFormValues {
  identifier: string | number;
  password: string;
  remember: boolean;
}
export interface registerFormValues {
  userName: string;
  password: string;
  email: string;
  phoneNumber: number;
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
  companyName: string;
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
  phoneNumber: number;
}
export interface changePasswordValues {
  password: string;
}
