import { QUANTITY, INVESTMENT } from "@/constants/expense";
import { attendance } from "@/models/mongo/attendanceSchema";
import { investment } from "@/models/mongo/investmentSchema";
import { midDayMeal } from "@/models/mongo/midDayMealItemSchema";
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

    const mealItems = [
      QUANTITY.WHEAT,
      QUANTITY.RICE,
      QUANTITY.OIL,
      QUANTITY.DAL,
      QUANTITY.MILK,
    ];
    const midDayMealDocs = await midDayMeal.aggregate([
      {
        $match: {
          itemName: { $in: mealItems.map((item) => item.name) },
        },
      },
      {
        $sort: { date: -1 },
      },
      {
        $group: {
          _id: "$itemName",
          latestDocument: { $first: "$$ROOT" },
        },
      },
    ]);
    const allDocs = await midDayMeal.find();

    const calcIndividualRequirement = (itemName: string) => {
      switch (itemName) {
        case QUANTITY.MILK.name:
          return QUANTITY.MILK.requirement * numberOfAttendees;
        case QUANTITY.DAL.name:
          return QUANTITY.DAL.requirement * numberOfAttendees;
        case QUANTITY.OIL.name:
          return QUANTITY.OIL.requirement * numberOfAttendees;
        case QUANTITY.RICE.name:
          return QUANTITY.RICE.requirement * numberOfAttendees;
        case QUANTITY.WHEAT.name:
          return QUANTITY.WHEAT.requirement * numberOfAttendees;
        default:
          return 0;
      }
    };
    for (let item of midDayMealDocs) {
      const oldDoc = item.latestDocument;

      await midDayMeal.create({
        itemName: oldDoc.itemName,
        totalStock:
          oldDoc.totalStock - calcIndividualRequirement(oldDoc.itemName),
        totalStudents: numberOfAttendees,
        highSchoolId: highSchoolId,
        usedQuantity: calcIndividualRequirement(oldDoc.itemName),
        date: new Date(),
      });
    }

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
