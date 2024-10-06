import dbConnect from "@/lib/dbConnect";
import Team from "@/models/Team";
import Player from "@/models/Player";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  await dbConnect();
  try {
    const { id } = params;

    const team = await Team.findByIdAndDelete(id);
    if (!team) {
      return NextResponse.json({ message: "Team not found" });
    }
    return NextResponse.json({ message: team.name + " deleted" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function PUT(request, { params }) {
  await dbConnect();
  try {
    const { id } = params;
    const { name } = await request.json();
    const team = await Team.findByIdAndUpdate(
      id,
      {
        name,
      },
      { new: true }
    );
    return NextResponse.json({ message: "Team updated" + team.name });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function GET(request, { params }) {
  await dbConnect();
  try {
    const { id } = params;
    const team = await Team.findById(id).populate("players");
    if (!team) {
      return NextResponse.json({ message: "Team not found" });
    }
    return NextResponse.json(team);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
