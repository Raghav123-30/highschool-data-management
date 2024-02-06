import { attendance } from "@/models/mongo/attendanceSchema";
import { investment } from "@/models/mongo/investmentSchema";
import { midDayMeal } from "@/models/mongo/midDayMealItemSchema";
import { connectToDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);
    await connectToDatabase();
    await investment.deleteMany({
      date: {
        $gte: todayStart,
        $lt: todayEnd,
      },
    });
    await attendance.deleteOne({
      date: {
        $gte: todayStart,
        $lt: todayEnd,
      },
    });
    await midDayMeal.deleteMany({
      date: {
        $gte: todayStart,
        $lt: todayEnd,
      },
    });
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
