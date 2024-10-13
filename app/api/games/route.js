import dbConnect from "@/lib/dbConnect";
import Game from "@/models/Game";
import Player from "@/models/Player";
import PlayerStats from "@/models/PlayerStats";
import Team from "@/models/Team";
import { NextResponse } from "next/server";

export async function POST(request) {
  await dbConnect();
  const {
    round,
    year,
    homeTeam,
    awayTeam,
    homeTeamScore,
    awayTeamScore,
    location,
    playerStats,
  } = await request.json();
  try {
    if (
      !round ||
      !homeTeamScore ||
      !year ||
      !homeTeam ||
      !awayTeam ||
      !awayTeamScore ||
      !location
    ) {
      return NextResponse.json({
        message: "Please fill out all the required fields",
      });
    }
    const homeTeamObj = await Team.findById(homeTeam);
    const awayTeamObj = await Team.findById(awayTeam);
    if (!homeTeamObj || !awayTeamObj) {
      return NextResponse.json({ message: "Home Team or Away Team Not found" });
    }
    const newGame = await new Game({
      round,
      year,
      homeTeam,
      awayTeam,
      homeTeamScore,
      awayTeamScore,
      location,
      playerStats,
    });
    await newGame.save();

    homeTeamObj.games.push(newGame._id);
    awayTeamObj.games.push(newGame._id);

    await homeTeamObj.save();
    await awayTeamObj.save();

    return NextResponse.json({
      message: "Game saved successfully",
      game: newGame,
    });
  } catch (error) {
    return NextResponse.json({ message: "Error Connecting", status: 500 });
  }
}

export async function GET(request) {
  await dbConnect();
  try {
    const games = await Game.find()
      .populate("homeTeam", "name")
      .populate("awayTeam", "name")
      .populate({
        path: "playerStats",
        populate: {
          path: "player",
          model: "Player",
        },
      });
    return NextResponse.json(games);
  } catch (error) {
    return NextResponse.json({ message: "Error Connecting", status: 500 });
  }
}
