import UserModel from "@/models/user";
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constants";
import connectToDB from "@/utils/db";
import { showSwal } from "@/utils/helpers";
// import usersValidator from "@/validators/user";

export async function POST(request: Request) {
  try {
    connectToDB();
    const body = await request.json();
    const { userName, email, phoneNumber, password } = body;

    // const validationResult = usersValidator({
    //   userName,
    //   email,
    //   phoneNumber,
    //   password,
    // });
    // if (validationResult !== true) {
    //   return Response.json(
    //     { message: "validation data and found your data is not valid !!" },
    //     { status: 422 }
    //   );
    // }

    if (!userName.trim()) {
      return showSwal(
        "نام کاربری اجباری می باشد لطفا وارد کنید",
        "error",
        "تلاش مجدد",
        "#"
      );
    }

    if (
      !userName.trim() ||
      !email.trim() ||
      !phoneNumber.trim() ||
      !password.trim()
    ) {
      return Response.json(
        { message: "Data is not valid !!" },
        { status: 422 }
      );
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ userName }, { email }, { phoneNumber }],
    });

    if (isUserExist) {
      return Response.json(
        { message: "This username or email or phoneNumber exist already !!" },
        { status: 422 }
      );
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
    return Response.json(
      { message: "User register Successfully :))" },
      {
        status: 201,
        headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
      }
    );
  } catch (err) {
    return Response.json(
      { message: "register has UnKnown internal server error !!" },
      { status: 500 }
    );
  }
}
