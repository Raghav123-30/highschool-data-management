import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ message: "success" }, { status: 200 });

  response.cookies.set("token", "dwidiwhdiw", { httpOnly: true });
  return response;
}
