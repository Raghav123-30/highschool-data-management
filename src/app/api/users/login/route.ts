import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import { highSchool } from "@/models/mongo/highSchoolSchema";
import bcryptjs from "bcryptjs";
export async function POST(request: NextRequest) {
  try {
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
      const response = NextResponse.json({ status: 200 });

      cookies().set("token", "dwidiwhdiw", { httpOnly: true });
      cookies().set("highSchoolId", currentHighSchool.highSchoolId, {
        httpOnly: true,
      });
      console.log(
        `cookie from login route while logging in ${
          cookies().get("highSchoolId")?.value
        }`
      );
      return response;
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 400 }
    );
  }
}
