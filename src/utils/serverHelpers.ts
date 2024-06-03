import UserModel from "@/models/user";
import { cookies } from "next/headers";
import { verifyAccessToken } from "./auth";
import connectToDB from "./db";

const authUser = async () => {
  connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    console.log("tokenPayload=", tokenPayload);
    if (tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }

  return user;
};
export { authUser };
