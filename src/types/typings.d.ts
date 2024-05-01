export interface loginFormValues{
    identifier:string|number,
    password:string,
    remember:boolean
}
export interface registerFormValues{
    userName:string,
    password:string,
    email:string,
    phoneNumber:number,
}
export interface loginByPhoneNumberFormValues{
    phoneNumber:number,
}
export interface verifyCodeFormValues{
    code:number
}
export interface forgetPasswordFormValues{
    identifier:number|string,
}
export interface setNewPasswordFormValues{
    code:number,
    password:string,
}