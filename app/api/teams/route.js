import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Team from "@/models/Team";

export async function POST(request) {
  await dbConnect();
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json(
        { message: "Please fill out all the fields" },
        { status: 400 }
      );
    }
    const team = await new Team({
      name,
    });
    await team.save();

    return NextResponse.json(
      { message: "Team saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Internal error: " }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await dbConnect();

    const teams = await Team.find().sort({ name: 1 });
    return NextResponse.json(teams);
  } catch (error) {
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
}
