import contactModel from "@/models/contact";
import connectToDB from "@/utils/db";

export function GET() {
  console.log("contact get request");
  return Response.json({ message: "send get req " });
}
export async function POST(request: Request) {
  console.log("post request");
  try {
    connectToDB();
    const body = await request.json();
    const { email, fullName, phoneNumber, companyName, message } = body;
    await contactModel.create({
      email,
      fullName,
      phoneNumber,
      companyName,
      message,
    });
    return Response.json(
      { message: "send contact message Successfully :))" },
      { status: 201 }
    );
  } catch (err) {}
  return Response.json({ message: "send post req " });
}
