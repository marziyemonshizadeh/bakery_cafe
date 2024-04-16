export interface loginFormValues{
    identifier:string|number,
    password:string,
    remember:boolean
}
export interface registerFormValues{
    fullName:string,
    userName:string,
    password:string,
    email:string,
    phoneNumber:number,
}
export interface loginByPhoneNumberFormValues{
    phoneNumber:number,
    code:number
}