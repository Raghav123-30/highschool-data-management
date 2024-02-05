import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookie = cookies();
  const { type } = await request.json();
  const highSchoolId = request.cookies.get("highSchoolId")?.value;
  console.log(`cookie again is ${highSchoolId}`);
  const response = NextResponse.json(
    {
      message: "success",
    },
    { status: 200 }
  );
  response.cookies.set("token", "dwdwdw", {
    httpOnly: true,
    expires: Date.now(),
  });

  return response;
}
