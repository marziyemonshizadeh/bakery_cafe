import UserModel from "@/models/user";
import { generateAccessToken, hashPassword, validateEmail, validatePassword, validatePhone } from "@/utils/auth";
import { roles } from "@/utils/constants";
import connectToDB from '@/utils/db';
import { showSwal } from "@/utils/helpers";

export async function POST(req:any,res:any) {
    await connectToDB()
    const body = await req.json()
    const { userName, email, phoneNumber, password } = body;
     
    // validation
    if(!userName.trim()){
       return showSwal(
            "نام کاربری اجباری می باشد لطفا وارد کنید",
            "error",
            "تلاش مجدد"
          );
    }

    if (
        !userName.trim() ||
        !email.trim()||
        !phoneNumber.trim()||
        !password.trim()) {
        return Response.json({ message: "Data is not valid !!" },{status:422});
      }
    
    if(!validateEmail(email)){
        return Response.json({ message: "email is not valid !!" },{status:422});
    }
    if(!validatePassword(password)){
        return Response.json({ message: "password is not valid !!" },{status:422});
    }
    if(!validatePhone(phoneNumber)){
        return Response.json({ message: "phoneNumber is not valid !!" },{status:422});
    }


    const isUserExist = await UserModel.findOne({
        $or: [{ userName }, { email }, {phoneNumber}],
      });
    
    if (isUserExist) {
       return Response.json({ message: "This username or email or phoneNumber exist already !!" },{status:422});
    } 

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ email });

    const users = await UserModel.find({});
    await UserModel.create({
      userName,
      email,
      phoneNumber,
      password: hashedPassword,
      role: users.length > 0 ? roles.USER : roles.ADMIN,
    });
    return Response.json({ message: "send get req " },{status:201 , headers:{"Set-Cookie":`token = ${accessToken};path= "/";httpOnly= true`}});
}
