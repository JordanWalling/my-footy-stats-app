import mongoose from "mongoose";

const playerStats = mongoose.Schema(
  {
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    },
    tries: {
      type: Number,
      default: 0,
    },
    lineBreaks: {
      type: Number,
      default: 0,
    },
    tackles: {
      type: Number,
      default: 0,
    },
    missedTackles: {
      type: Number,
      default: 0,
    },
    metresRun: {
      type: Number,
      default: 0,
    },
    tryAssists: {
      type: Number,
      default: 0,
    },
    tackleBreaks: {
      type: Number,
      default: 0,
    },
    opposition: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PlayerStats =
  mongoose.models.PlayerStats || mongoose.model("PlayerStats", playerStats);

export default PlayerStats;
