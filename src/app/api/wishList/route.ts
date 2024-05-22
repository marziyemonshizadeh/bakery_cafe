import ProductModel from "@/models/product";
import UserModel from "@/models/user";
import wishListModel from "@/models/wishList";

import connectToDB from "@/utils/db";

export async function GET() {
  const wishLists = await wishListModel.find({});
  return Response.json(wishLists);
}

export async function POST(request: Request) {
  try {
    connectToDB();
    const body = await request.json();
    const { userID, productID } = body;
    const wishList = await wishListModel.create({
      userID,
      productID,
    });

    if (!userID.trim() || !productID.trim()) {
      return Response.json(
        { message: "Data is not valid !!" },
        { status: 419 }
      );
    }
    const isUserExist = await UserModel.findOne({
      _id: userID,
    });

    if (!isUserExist) {
      return Response.json({ message: "user not exist !!" }, { status: 422 });
    }
    const isProductExist = await ProductModel.findOne({
      _id: productID,
    });

    if (!isProductExist) {
      return Response.json(
        { message: "product not exist !!" },
        { status: 422 }
      );
    }

    return Response.json(
      { message: "product added wishList successfully :))", data: wishList },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
