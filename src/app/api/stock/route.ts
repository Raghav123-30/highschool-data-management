import { midDayMeal } from "@/models/mongo/midDayMealItemSchema";
import { connectToDatabase } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {
      itemName,
      usedQuantity,
      highSchoolId,
      date,
      totalStudents,
      totalStock,
    } = await request.json();
    await connectToDatabase();
    const doc = await midDayMeal.create({
      itemName: itemName,
      usedQuantity: usedQuantity,
      highSchoolId: highSchoolId,
      date: date,
      totalStudents: totalStudents,
      totalStock: totalStock,
    });
    return NextResponse.json({ doc: doc }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "failed" }, { status: 500 });
  }
}
