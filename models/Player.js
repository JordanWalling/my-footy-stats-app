import mongoose from "mongoose";

const playerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    position: {
      type: String,
      required: true,
    },
    jerseyNumber: {
      type: Number,
      required: true,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    stats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PlayerStats",
      },
    ],
  },
  { timestamps: true }
);

const Player = mongoose.models.Player || mongoose.model("Player", playerSchema);

export default Player;
