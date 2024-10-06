import mongoose from "mongoose";

const gameSchema = mongoose.Schema(
  {
    year: {
      type: Number,
      required: true,
    },
    homeTeam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    awayTeam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    homeTeamScore: {
      type: Number,
      required: true,
    },
    awayTeamScore: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Game = mongoose.models.Game || mongoose.model("Game", gameSchema);

export default Game;
