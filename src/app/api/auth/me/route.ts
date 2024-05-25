import UserModel from "@/models/user";
import { verifyAccessToken } from "@/utils/auth";
import connectToDB from "@/utils/db";
import { cookies } from "next/headers";

export async function GET() {
  connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne(
        { email: tokenPayload.email },
        "-password -refreshToken -__v"
      );
    }
    return Response.json(user);
  } else {
    return Response.json(
      {
        data: null,
        message: "Not access !!",
      },
      { status: 401 }
    );
  }
}
