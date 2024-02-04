import mongoose from "mongoose";
import { connectToDatabase } from "@/utils/db";
import { date } from "@/models/mongo/dateSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  try {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const startOfMonth = new Date(currentYear, currentMonth, 1);
    const endOfMonth = new Date(currentYear, currentMonth + 1, 1);
    const dates = await date.find({
      date: {
        $gte: startOfMonth,
        $lt: endOfMonth,
      },
    });
    dates.forEach((doc) => {
      const formattedDate = doc.date.toLocaleDateString("en-Us", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      console.log(formattedDate);
    });

    return NextResponse.json({ dates }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { sentDate } = await request.json();

    await connectToDatabase();
    const dateObject = new Date(sentDate);
    await date.create({
      date: dateObject,
    });
    return NextResponse.json({ message: "okay" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
