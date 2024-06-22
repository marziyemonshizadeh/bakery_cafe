import departmentModel from "@/models/department";
import connectToDB from "@/utils/db";

export async function GET() {
  connectToDB();
  const departments = await departmentModel.find({});
  return Response.json(departments);
}
export async function POST(request: Request) {
  try {
    connectToDB();
    const body = await request.json();
    const { title } = body;

    if (!title.trim()) {
      return Response.json(
        { message: "Data is not valid !!" },
        { status: 422 }
      );
    }
    const department = await departmentModel.create({
      title,
    });
    return Response.json(
      { message: "department created successfully :))", data: department },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
