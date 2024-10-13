import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import PlayerStats from "@/models/PlayerStats";
import Game from "@/models/Game";
import Player from "@/models/Player";

export async function POST(request) {
  await dbConnect();
  try {
    const {
      player,
      tries,
      lineBreaks,
      tackles,
      missedTackles,
      metresRun,
      tryAssists,
      tackleBreaks,
      opposition,
      gameId,
    } = await request.json();
    if (!player || !gameId || !opposition) {
      return NextResponse.json({ message: "Please fill out all the fields" });
    }
    const game = await Game.findById(gameId);
    if (!game) {
      return NextResponse.json({ message: "Game not found" });
    }

    const newPlayerStats = await new PlayerStats({
      player,
      tries,
      lineBreaks,
      tackles,
      missedTackles,
      metresRun,
      tryAssists,
      tackleBreaks,
      opposition,
    });
    await newPlayerStats.save();

    game.playerStats.push(newPlayerStats._id);

    await game.save();

    const updatedPlayer = await Player.findById(player);

    updatedPlayer.stats.push(newPlayerStats._id);

    await updatedPlayer.save();

    return NextResponse.json({
      message: "Player stats added successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Error" });
  }
}
