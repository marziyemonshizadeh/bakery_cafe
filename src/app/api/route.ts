export function GET() {
  console.log("get request");
  return Response.json({ message: "send get req " });
}
export function POST() {
  console.log("post request");
  return Response.json({ message: "send post req " });
}
