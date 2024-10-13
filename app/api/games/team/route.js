import dbConnect from "@/lib/dbConnect";
import Game from "@/models/Game";
import { NextResponse } from "next/server";

export async function GET(request) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const teamId = searchParams.get("teamId");

  if (!teamId) {
    return NextResponse.json(
      { message: "Team ID is required" },
      { status: 400 }
    );
  }

  try {
    const games = await Game.find({
      $or: [{ homeTeam: teamId }, { awayTeam: teamId }],
    })
      .populate("homeTeam", "name")
      .populate("awayTeam", "name")
      .populate({
        path: "playerStats",
        populate: {
          path: "player",
          model: "Player",
        },
      });

    if (!games || games.length === 0) {
      return NextResponse.json(
        { message: "No games found for this team" },
        { status: 404 }
      );
    }

    return NextResponse.json(games);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching games", error },
      { status: 500 }
    );
  }
}
