import { attendance } from "@/models/mongo/attendanceSchema";
import { connectToDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    const attendanceData = await attendance.find();
    return NextResponse.json(
      { attendanceData: attendanceData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
