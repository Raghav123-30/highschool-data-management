import { connectToDatabase } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET() {
  try {
  } catch (error) {}
}

export async function POST(request: NextRequest) {
  const cookie = cookies();
  try {
    await connectToDatabase();
    const today = new Date();

    console.log(
      `cookie from this route now is ${cookie.get("highSchoolId")?.value}`
    );
    console.log(request.cookies.get("highSchoolId")?.value);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 400 });
  }
}
