"use client";
import DisplayCard from "@/components/DisplayCard";
import { usePathname } from "next/navigation";
import styles from "./IndividualPlayerStats.module.css";
import { useState } from "react";
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
      <form className={styles.statsForm}>
        <DisplayCard>
          <div className={styles.statsFormContents}>
            <h3>Enter a Team to Show Player Stats</h3>
            <select
              onChange={(e) => setTeamChosen(e.target.value)}
              value={teamChosen}
            >
              <option value="" disabled>
                Select a Team
              </option>

              <option value="Raiders">Raiders</option>
              <option value="Knights">Knights</option>
            </select>
          </div>
        </DisplayCard>
      </form>

      <ul className={styles.statsWrapper}>
        {playerStatsAgainstTeam.map((game) => {
          return (
            <>
              <DisplayCard>
                <li key={game.id} className={styles.li}>
                  <div className={styles.statGroup}>
                    <div className={styles.statName}>
                      <p>Opposition: </p>
                      <p>Tries: </p>
                      <p>Try Assists: </p>
                      <p>Metres Run: </p>
                      <p>Tackles: </p>
                      <p>Missed Tackles: </p>
                      <p>Tackle Breaks: </p>
                      <p>Location: </p>
                    </div>
                    <div className={styles.statValue}>
                      <p>{game.opposition}</p>
                      <p>{game.tries}</p>
                      <p>{game.tryAssists}</p>
                      <p>{game.metresRun}</p>
                      <p>{game.tackles}</p>
                      <p>{game.missedTackles}</p>
                      <p>{game.tackleBreaks}</p>
                      <p>{game.location}</p>
                    </div>
                  </div>
                </li>
              </DisplayCard>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default IndividualPlayerStats;
