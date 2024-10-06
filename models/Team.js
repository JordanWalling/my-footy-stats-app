import mongoose from "mongoose";

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
    games: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
      },
    ],
  },
  { timestamps: true }
);

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

export default Team;
