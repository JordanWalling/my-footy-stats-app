"use client";
import DisplayCard from "@/components/DisplayCard";
import { usePathname } from "next/navigation";
import styles from "./IndividualPlayerStats.module.css";
import { useState } from "react";
import DisplayPlayerGameStats from "@/components/DisplayPlayerGameStats";
import PlayerStatsForm from "@/components/PlayerStatsForm";
function IndividualPlayerStats() {
  const [teamChosen, setTeamChosen] = useState("");
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
      location: "Raiders",
      opposition: "Raiders",
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
      location: "Raiders",
      opposition: "Raiders",
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
      opposition: "Knights",
    },
  ];

  const playerStatsAgainstTeam = teamChosen
    ? playerStats.filter((game) => game.opposition === teamChosen)
    : playerStats;
  return (
    <div className={styles.statsPage}>
      {/* Form Stats Filter */}
      <PlayerStatsForm teamChosen={teamChosen} setTeamChosen={setTeamChosen} />

      <ul className={styles.statsWrapper}>
        {playerStatsAgainstTeam.map((game) => {
          return (
            <>
              <DisplayCard>
                {/* Show Individual Player Stats */}
                <DisplayPlayerGameStats game={game} />
              </DisplayCard>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default IndividualPlayerStats;
