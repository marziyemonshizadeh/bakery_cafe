import UserModel from "@/models/user";
import { hashPassword } from "@/utils/auth";
import connectToDB from "@/utils/db";
import { authUser } from "@/utils/serverHelpers";

export async function POST(req: Request) {
  try {
    connectToDB();
    const user = await authUser();
    const body = await req.json();
    const { password } = body;
    const hashedPassword = await hashPassword(password);

    if (!password.trim()) {
      return Response.json(
        { message: "password is not valid !!" },
        { status: 422 }
      );
    }

    await UserModel.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          password: hashedPassword,
        },
      }
    );

    return Response.json(
      { message: "User updated successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
