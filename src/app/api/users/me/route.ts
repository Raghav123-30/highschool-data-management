import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const highSchoolId = cookies().get("highSchoolId")?.value;

  if (highSchoolId) {
    return NextResponse.json({ highSchoolId: highSchoolId }, { status: 200 });
  } else {
    return NextResponse.json({ status: 400 });
  }
}
