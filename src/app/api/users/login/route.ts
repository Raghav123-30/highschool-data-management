import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import { highSchool } from "@/models/mongo/highSchoolSchema";
import bcryptjs from "bcryptjs";
export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({ message: "success" }, { status: 200 });
    const { userName, password } = await request.json();

    await connectToDatabase();
    const currentHighSchool = await highSchool
      .findOne()
      .where("userName")
      .equals(userName);
    const isPasswordValid = await bcryptjs.compare(
      password,
      currentHighSchool.password
    );

    if (isPasswordValid) {
      response.cookies.set("token", "dwidiwhdiw", { httpOnly: true });
      response.cookies.set("highSchoolId", currentHighSchool._id, {
        httpOnly: true,
        sameSite: false,
      });
    }
    console.log(request.cookies.get("highSchoolId")?.value);

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 400 }
    );
  }
}
