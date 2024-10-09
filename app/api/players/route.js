import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Player from "@/models/Player";
import Team from "@/models/Team";

export async function POST(request) {
  await dbConnect();
  try {
    const { name, jerseyNumber, position, teamId } = await request.json();
    if (!name || !jerseyNumber || !position || !teamId) {
      return NextResponse.json(
        { message: "Please fill out all fields" },
        { status: 400 }
      );
    }
    const team = await Team.findById(teamId);
    if (!team) {
      return NextResponse.json({ message: "Team not found" }, { status: 404 });
    }
    const player = await new Player({
      name,
      jerseyNumber,
      position,
      team: team._id,
    });
    await player.save();
    await team.players.push(player._id);
    await team.save();
    return NextResponse.json(
      { message: "Player added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  await dbConnect();
  try {
    const players = await Player.find().sort({ name: 1 });

    return NextResponse.json(players);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
