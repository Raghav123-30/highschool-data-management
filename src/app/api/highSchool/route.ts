import { connectToDatabase } from "@/utils/db";
import { highSchool } from "@/models/mongo/highSchoolSchema";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const { highSchoolId, highSchoolName, userName, password, totalStrength } =
      await request.json();
    const createdSchool = await highSchool.create({
      highSchoolId: highSchoolId,
      highSchoolName: highSchoolName,
      userName: userName,
      password: password,
      totalStrength: totalStrength,
    });
    return NextResponse.json(createdSchool, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const schools = await highSchool.find();
    return NextResponse.json({ schools: schools }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
