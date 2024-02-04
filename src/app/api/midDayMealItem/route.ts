import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  try {
  } catch (error) {}
}

export async function GET(request: NextRequest) {
  try {
    let response = NextResponse.json({ message: "okay" });
    console.log(
      `Trying to access cookie from stock ${
        request.cookies.get("highSchoolId")?.value
      }`
    );
    return response;
  } catch (error) {
    return NextResponse.json({ status: 400 });
  }
}
