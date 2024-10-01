"use client";
import DisplayCard from "@/components/DisplayCard";
import { usePathname } from "next/navigation";

function IndividualPlayerStats() {
  const playerStats = [
    {
      id: 1,
      tries: 1,
      lineBreaks: 1,
      tackles: 5,
      missedTackles: 20,
      metresRun: 240,
      tryAssists: 0,
      tackleBreaks: 2,
      location: "4 Pines Park, Brookvale",
      opposition: "Canberra Raiders",
    },
    {
      id: 2,
      tries: 2,
      lineBreaks: 2,
      tackles: 10,
      missedTackles: 30,
      metresRun: 360,
      tryAssists: 1,
      tackleBreaks: 3,
      location: "GIO Stadium, Canberra",
      opposition: "Canberra Raiders",
    },
    {
      id: 3,
      tries: 3,
      lineBreaks: 3,
      tackles: 15,
      missedTackles: 40,
      metresRun: 480,
      tryAssists: 2,
      tackleBreaks: 4,
      location: "Newcastle",
      opposition: "Newcastle Knights",
    },
  ];
  return (
    <div className="h-screen">
      <h1>Individual Player Stats</h1>
      <p>This page will display individual player stats.</p>

      <ul>
        {playerStats.map((game) => {
          return (
            <div key={game.id}>
              <li>{game.tries}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default IndividualPlayerStats;
