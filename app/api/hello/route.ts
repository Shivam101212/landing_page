import { cookies } from "next/headers";

export async function GET() {
  const cookiesHead=await cookies()
  console.log(cookiesHead)
  return Response.json({ message: "hello", name: "shibu" });
}
