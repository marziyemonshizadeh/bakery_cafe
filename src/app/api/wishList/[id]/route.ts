import wishListModel from "@/models/wishList";
import connectToDB from "@/utils/db";
import { authUser } from "@/utils/serverHelpers";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    connectToDB();
    const user = await authUser();
    if (!user) {
      return Response.json(
        { message: "please login first !!" },
        { status: 401 }
      );
    }

    const productID = params.id;
    await wishListModel.findOneAndDelete({
      userID: user._id,
      productID: productID,
    });
    return Response.json({ message: "Product removed successfully :))" });
  } catch (error) {
    return Response.json(
      { message: `error = ${error}` },
      {
        status: 500,
      }
    );
  }
}
