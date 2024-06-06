import commentModel from "@/models/comment";
import productModel from "@/models/product";
import connectToDB from "@/utils/db";

export async function GET() {
  connectToDB();
  const comments = await commentModel.find({}, "-__v");
  return Response.json(comments);
}
export async function POST(request: Request) {
  try {
    connectToDB();
    const body = await request.json();
    const { name, email, message, score, date, productID, userID } = body;

    const comment = await commentModel.create({
      name,
      email,
      message,
      score,
      date,
      productID,
      userID,
    });
    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: productID },
      {
        $push: {
          comments: comment._id,
        },
      }
    );
    return Response.json(
      { message: "comment created successfully :))", data: comment },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
