import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import PlayerStats from "@/models/PlayerStats";
import Game from "@/models/Game";
import Player from "@/models/Player";
import Team from "@/models/Team";

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
      location,
    } = await request.json();
    if (!player || !gameId || !opposition) {
      return NextResponse.json({ message: "Please fill out all the fields" });
    }
    const game = await Game.findById(gameId);
    if (!game) {
      return NextResponse.json({ message: "Game not found" });
    }

    const newPlayerStats = await PlayerStats.create({
      player,
      tries,
      lineBreaks,
      tackles,
      missedTackles,
      metresRun,
      tryAssists,
      tackleBreaks,
      opposition,
      location,
    });
    await Player.findByIdAndUpdate(player, {
      $push: { stats: { playerStats: newPlayerStats._id } },
    });

    // game.playerStats.push(newPlayerStats._id);

    // await game.save();

    // const updatedPlayer = await Player.findById(player);

    // updatedPlayer.stats.push(newPlayerStats._id);

    // await updatedPlayer.save();

    return NextResponse.json({
      message: "Player stats added successfully",
    });
  } catch (error) {
    console.error("Error adding player stats", error);
    return NextResponse.json({ error: "Internal Error" });
  }
}

export async function GET(request) {
  await dbConnect();

  try {
    const allPlayerStats = await PlayerStats.find().populate({
      path: "player",
      select: "name position team",
      populate: {
        path: "team",
        select: "name",
      },
    });

    return NextResponse.json(allPlayerStats);
  } catch (error) {
    console.error("Error fetching data", error);
    return NextResponse.json({ error: "Internal Error" });
  }
}
