"use client";
import DisplayCard from "@/components/DisplayCard";
import { usePathname } from "next/navigation";
import styles from "./IndividualPlayerStats.module.css";
import { useState, useEffect } from "react";
import DisplayPlayerGameStats from "@/components/DisplayPlayerGameStats";
import PlayerStatsForm from "@/components/PlayerStatsForm";
import BackButton from "@/components/BackButton";
function IndividualPlayerStats() {
  const pathName = usePathname();
  console.log("Full path:", pathName);
  const [fetchedStats, setFetchedStats] = useState([]);

  const pathSegments = pathName.split("/");
  const playerId = pathSegments.length > 4 ? pathSegments[4] : null;
  const [teamChosen, setTeamChosen] = useState("");
  //   const playerStats = [
  //     {
  //       id: 1,
  //       tries: 1,
  //       lineBreaks: 1,
  //       tackles: 5,
  //       missedTackles: 20,
  //       metresRun: 240,
  //       tryAssists: 0,
  //       tackleBreaks: 2,
  //       location: "Raiders",
  //       opposition: "Raiders",
  //     },
  //     {
  //       id: 2,
  //       tries: 2,
  //       lineBreaks: 2,
  //       tackles: 10,
  //       missedTackles: 30,
  //       metresRun: 360,
  //       tryAssists: 1,
  //       tackleBreaks: 3,
  //       location: "Raiders",
  //       opposition: "Raiders",
  //     },
  //     {
  //       id: 3,
  //       tries: 3,
  //       lineBreaks: 3,
  //       tackles: 15,
  //       missedTackles: 40,
  //       metresRun: 480,
  //       tryAssists: 2,
  //       tackleBreaks: 4,
  //       location: "Newcastle",
  //       opposition: "Knights",
  //     },
  //   ];

  const fetchData = async () => {
    try {
      const data = await fetch(`/api/player-stats/${playerId}`);
      const response = await data.json();
      //   console.log(response);
      setFetchedStats(response.data.stats[0].playerStats);
      console.log(response.data.stats[0].playerStats);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!playerId) {
      console.error("Player ID is missing from the URL");
      return;
    }
    fetchData();
  }, []);

  const playerStatsAgainstTeam = teamChosen
    ? fetchedStats.filter((game) => game.opposition.name === teamChosen)
    : fetchedStats;

  //   const playerStatsAgainstTeam = fetchedStats.map(
  //     (game) => game.opposition.name === teamChosen
  //   );
  //   const playerStatsAgainstTeam = fetchedStats.map((game) => game);
  return (
    <div className={styles.statsPage}>
      <BackButton />
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
