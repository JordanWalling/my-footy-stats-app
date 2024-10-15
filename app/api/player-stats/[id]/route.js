import PlayerStats from "@/models/PlayerStats";

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Player from "@/models/Player";
import Game from "@/models/Game";

export async function GET(request, { params }) {
  await dbConnect();

  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: "No ID found!" });
  }
  const player = await Player.findById(id).populate({
    path: "stats.playerStats",
    populate: [
      {
        path: "opposition",
        select: "name",
      },
      {
        path: "game",
        select: "homeTeam awayTeam homeTeamScore awayTeamScore",
      },
      {
        path: "player",
        model: "Player",
        select: "name",
      },
    ],
  });

  //   const playerStats = await PlayerStats.findById(id);
  if (!player) {
    return NextResponse.json({ message: "No stats to be found!" });
  }

  return NextResponse.json({ data: player }, { status: 200 });
}
