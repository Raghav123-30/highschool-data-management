import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import { highSchool } from "@/models/mongo/highSchoolSchema";
export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({ message: "success" }, { status: 200 });
    const { userName, password } = await request.json();
    console.log(userName, password);
    await connectToDatabase();

    response.cookies.set("token", "dwidiwhdiw", { httpOnly: true });
    return response;
  } catch (error) {}
}
