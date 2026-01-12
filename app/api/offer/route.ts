import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // TODO: connect email provider later
  console.log("Offer received:", data);

  return NextResponse.json({ success: true });
}
