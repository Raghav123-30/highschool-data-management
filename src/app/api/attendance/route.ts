import { QUANTITY, INVESTMENT } from "@/constants/expense";
import { attendance } from "@/models/mongo/attendanceSchema";
import { investment } from "@/models/mongo/investmentSchema";
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
    const wheatUsed = QUANTITY.WHEAT.requirement * numberOfAttendees;
    const riceUsed = QUANTITY.RICE.requirement * numberOfAttendees;
    const oilUsed = QUANTITY.OIL.requirement * numberOfAttendees;
    const dalUsed = QUANTITY.DAL.requirement * numberOfAttendees;
    const milkUsed = QUANTITY.MILK.requirement * numberOfAttendees;

    const mealItems = [
      QUANTITY.WHEAT.name,
      QUANTITY.RICE.name,
      QUANTITY.OIL.name,
      QUANTITY.DAL.name,
      QUANTITY.MILK.name,
    ];

    const expenseItems = [
      INVESTMENT.SALT,
      INVESTMENT.SUGAR,
      INVESTMENT.VEGETABLES,
      INVESTMENT.BANANA,
      INVESTMENT.CHIKKI,
      INVESTMENT.MASALA,
    ];
    for (let item of expenseItems) {
      await investment.create({
        highSchoolId: highSchoolId,
        itemName: item.name,
        studentCount: numberOfAttendees,
        totalExpense: item.expense * numberOfAttendees,
        date: new Date(),
      });
    }
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
