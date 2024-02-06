import { investment } from "@/models/mongo/investmentSchema";
import { connectToDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
  } catch (error) {}
}

export async function GET() {
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);
    await connectToDatabase();
    const investmentData = await investment.find({
      date: {
        $gte: todayStart,
        $lt: todayEnd,
      },
    });
    console.log(`We got investment data ${investmentData}`);
    return NextResponse.json(
      { investmentData: investmentData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 400 }
    );
  }
}
