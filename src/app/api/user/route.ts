import UserModel from "@/models/user";
import connectToDB from "@/utils/db";
import { authUser } from "@/utils/serverHelpers";

export async function POST(req: Request) {
  try {
    connectToDB();
    const user = await authUser();
    const body = await req.json();
    const { userName, email, phoneNumber } = body;

    if (!userName.trim() || !email.trim() || !phoneNumber.trim()) {
      return Response.json(
        { message: "Data is not valid !!" },
        { status: 422 }
      );
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ userName }, { email }, { phoneNumber }],
    });

    if (!isUserExist) {
      return Response.json(
        { message: "is not user exist !!" },
        { status: 422 }
      );
    }

    await UserModel.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          userName,
          email,
          phoneNumber,
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
