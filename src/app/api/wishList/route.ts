import ProductModel from "@/models/product";
import UserModel from "@/models/user";
import {
  default as WishlistModel,
  default as wishListModel,
} from "@/models/wishList";

import connectToDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const wishLists = await wishListModel.find({});
  return NextResponse.json(wishLists);
}

export async function POST(request: Request) {
  try {
    connectToDB();
    const body = await request.json();
    const { userID, productID } = body;

    if (!userID.trim() || !productID.trim()) {
      return NextResponse.json(
        { message: "Data is not valid !!" },
        { status: 419 }
      );
    }
    const isUserExist = await UserModel.findOne({
      _id: userID,
    });

    if (!isUserExist) {
      return NextResponse.json(
        { message: "user not exist !!" },
        { status: 422 }
      );
    }
    const isProductExist = await ProductModel.findOne({
      _id: productID,
    });

    if (!isProductExist) {
      return NextResponse.json(
        { message: "product not exist !!" },
        { status: 422 }
      );
    }
    const wish = await WishlistModel.findOne({ userID, productID });
    if (!wish) {
      await wishListModel.create({
        userID,
        productID,
      });
    }
    return NextResponse.json(
      { message: "product added wishList successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
