import UserModel from "@/models/user";
import { generateAccessToken, generateRefreshToken, validatePassword, verifyPassword } from "@/utils/auth";
import connectToDB from '@/utils/db';

 
export function GET() {
    console.log("get request");
    return Response.json({ message: "send get req " });

}
export async function POST(req: any) {
    connectToDB()
    try{

        const body = await req.json()
        const { identifier, password } = body;
        
    
        if (
            !identifier.trim() ||
            !password.trim()) {
            return Response.json({ message: "Data is not valid !!" },{status:422});
          }
        
          const ValidationPassword = validatePassword(password);
          if (!ValidationPassword) {
            return Response.json({ message: "password is not valid !!" },{status:422});
          }
    
        const isUserExist = await UserModel.findOne({
            $or: [{ phoneNumber: identifier }, { email: identifier }],
          });
        
        if (!isUserExist) {
           return Response.json({ message: "email or phone or pass not found !!" },{status:422});
        } 
        
        const isMatchPasswordWithHash = await verifyPassword(password, isUserExist.password); 
        if (!isMatchPasswordWithHash) {
            return Response.json({ message: "your mail or password is not correct !!" },{status:401});
          }
        
        const accessToken = generateAccessToken({ email :isUserExist.email});
        const refreshToken = generateRefreshToken({ email :isUserExist.email});
      
        return Response.json({ message: "User Logged In Successfully :))" },{status:200 , headers:{"Set-Cookie":`token = ${accessToken};path= "/";httpOnly= true`}}); 
      }catch (err) {
        return Response.json({ message: "log in has UnKnown internal server error !!" },{status:500 });
  
      }
}
