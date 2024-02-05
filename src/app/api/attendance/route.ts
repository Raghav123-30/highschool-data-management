import { attendance } from "@/models/mongo/attendanceSchema";
import { connectToDatabase } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);
    const doc = await attendance.findOne({
      date: {
        $gte: todayStart,
        $lt: todayEnd,
      },
    });
    console.log(doc);

    if (doc) {
      return NextResponse.json(
        { message: "today's attendance is added" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "today;s attendance is not added" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { numberOfAttendees } = await request.json();
    const date = new Date();
    const highSchoolId = request.cookies.get("highSchoolId")?.value;
    const document = await attendance.create({
      highSchoolId: highSchoolId,
      numberOfAttendees: numberOfAttendees,
      date: date,
    });
    console.log(document);
    return NextResponse.json(
      { message: "Attendane data is submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong,please try again later" },
      { status: 400 }
    );
  }
}
