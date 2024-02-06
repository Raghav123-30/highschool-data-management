import { connectToDatabase } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { midDayMeal } from "@/models/mongo/midDayMealItemSchema";
export async function GET() {
  try {
    await connectToDatabase();
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);
    const midDayMealData = await midDayMeal.find({
      date: {
        $gte: todayStart,
        $lt: todayEnd,
      },
    });
    return NextResponse.json(
      { midDayMealData: midDayMealData },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ message: "something went wrong" }, { status: 200 });
  }
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
