import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { wheat, rice, dal, oil, milk } = await request.json();
  console.log(wheat, rice, dal, oil, milk);
  return NextResponse.json({ status: 201 });
}
