import subDepartmentModel from "@/models/subDepartment";
import connectToDB from "@/utils/db";

export async function POST(request: Request) {
  try {
    connectToDB();
    const body = await request.json();
    const { title, department } = body;

    if (!title.trim() || !department.trim()) {
      return Response.json(
        { message: "Data is not valid !!" },
        { status: 422 }
      );
    }
    const subDepartment = await subDepartmentModel.create({
      title,
      department,
    });
    return Response.json(
      {
        message: "subDepartment created successfully :))",
        data: subDepartment,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
