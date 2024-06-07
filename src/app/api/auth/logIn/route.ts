import UserModel from "@/models/user";
import {
  generateAccessToken,
  generateRefreshToken,
  validatePassword,
  verifyPassword,
} from "@/utils/auth";
import connectToDB from "@/utils/db";

export function GET() {
  console.log("get request");
  return Response.json({ message: "send get req " });
}
export async function POST(request: Request) {
  try {
    connectToDB();

    const body = await request.json();
    const { identifier, password } = body;

    if (!identifier.trim() || !password.trim()) {
      return Response.json(
        { message: "Data is not valid !!" },
        { status: 419 }
      );
    }

    const ValidationPassword = validatePassword(password);
    if (!ValidationPassword) {
      return Response.json(
        { message: "password is not valid !!" },
        { status: 422 }
      );
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ phoneNumber: identifier }, { email: identifier }],
    });

    if (!isUserExist) {
      return Response.json(
        { message: "email or phone or pass not found !!" },
        { status: 422 }
      );
    }

    const isMatchPasswordWithHash = await verifyPassword(
      password,
      isUserExist.password
    );
    if (!isMatchPasswordWithHash) {
      return Response.json(
        { message: "your mail or password is not correct !!" },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({ email: identifier });
    console.log("accessToken", accessToken);

    const refreshToken = generateRefreshToken({ email: identifier });
    console.log("refreshToken", refreshToken);

    await UserModel.findOneAndUpdate(
      { email: isUserExist.email },
      { $set: { refreshToken } }
    );
    return Response.json(
      { message: "User Logged In Successfully :))" },
      {
        status: 200,
        headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
      }
    );
  } catch (err) {
    console.log("log in has UnKnown internal server error ->", err);
    return Response.json(
      { message: err },
      {
        status: 500,
      }
    );
  }
}
