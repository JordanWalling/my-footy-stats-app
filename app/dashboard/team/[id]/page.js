"use client";
import DisplayCard from "@/components/DisplayCard";
import ButtonTeamToggle from "@/components/ButtonTeamToggle";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./IndividualTeamPage.module.css";
import DisplayPlayerCard from "@/components/DisplayPlayerCard";
import { useState, useEffect } from "react";
import BackButton from "@/components/BackButton";

function IndividualTeamPage() {
  const [showTeam, setShowTeam] = useState(true);
  const [yearChosen, setYearChosen] = useState("");
  const [teamGames, setTeamGames] = useState([]);
  const [team, setTeam] = useState([]);
  const pathname = usePathname();
  console.log("Current pathname: ", pathname);
  const id = pathname.split("/")[3];

  useEffect(() => {
    if (id) {
      const fetchPlayers = async () => {
        try {
          const response = await fetch(`/api/teams/${id}`);
          const data = await response.json();
          setTeam(data);
        } catch (error) {
          console.log("Error fetching players: ", error);
        }
      };
      fetchPlayers();

      const fetchGames = async () => {
        try {
          const response = await fetch(`/api/games/team?teamId=${id}`);
          const data = await response.json();
          console.log("this is the all the games data: ", data);
          setTeamGames(data);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchGames();
    } else {
      console.log("Invalid ID");
    }
  }, [id]);

  //   const games = [
  //     {
  //       id: 1,
  //       year: 2024,
  //       homeTeam: "Sea Eagles",
  //       awayTeam: "Raiders",
  //       homeTeamScore: 26,
  //       awayTeamScore: 20,
  //     },
  //     {
  //       id: 2,
  //       year: 2024,
  //       homeTeam: "Raiders",
  //       awayTeam: "Sea Eagles",
  //       homeTeamScore: 6,
  //       awayTeamScore: 32,
  //     },
  //     {
  //       id: 3,
  //       year: 2024,
  //       homeTeam: "Sea Eagles",
  //       awayTeam: "Roosters",
  //       homeTeamScore: 25,
  //       awayTeamScore: 19,
  //     },
  //     {
  //       id: 4,
  //       year: 2024,
  //       homeTeam: "Roosters",
  //       awayTeam: "Sea Eagles",
  //       homeTeamScore: 32,
  //       awayTeamScore: 12,
  //     },
  //     {
  //       id: 5,
  //       year: 2023,
  //       homeTeam: "Sea Eagles",
  //       awayTeam: "Raiders",
  //       homeTeamScore: 26,
  //       awayTeamScore: 20,
  //     },
  //     {
  //       id: 6,
  //       year: 2023,
  //       homeTeam: "Raiders",
  //       awayTeam: "Sea Eagles",
  //       homeTeamScore: 6,
  //       awayTeamScore: 32,
  //     },
  //     {
  //       id: 7,
  //       year: 2023,
  //       homeTeam: "Sea Eagles",
  //       awayTeam: "Roosters",
  //       homeTeamScore: 25,
  //       awayTeamScore: 19,
  //     },
  //     {
  //       id: 8,
  //       year: 2023,
  //       homeTeam: "Roosters",
  //       awayTeam: "Sea Eagles",
  //       homeTeamScore: 32,
  //       awayTeamScore: 12,
  //     },
  //     {
  //       id: 9,
  //       year: 2022,
  //       homeTeam: "Sea Eagles",
  //       awayTeam: "Raiders",
  //       homeTeamScore: 26,
  //       awayTeamScore: 20,
  //     },
  //     {
  //       id: 10,
  //       year: 2022,
  //       homeTeam: "Raiders",
  //       awayTeam: "Sea Eagles",
  //       homeTeamScore: 6,
  //       awayTeamScore: 32,
  //     },
  //     {
  //       id: 11,
  //       year: 2022,
  //       homeTeam: "Sea Eagles",
  //       awayTeam: "Roosters",
  //       homeTeamScore: 25,
  //       awayTeamScore: 19,
  //     },
  //     {
  //       id: 12,
  //       year: 2022,
  //       homeTeam: "Roosters",
  //       awayTeam: "Sea Eagles",
  //       homeTeamScore: 32,
  //       awayTeamScore: 12,
  //     },
  //     {
  //       id: 12,
  //       year: 2022,
  //       homeTeam: "Roosters",
  //       awayTeam: "Sea Eagles",
  //       homeTeamScore: 40,
  //       awayTeamScore: 12,
  //     },
  //   ];

  const renderTeamGame = yearChosen
    ? teamGames?.filter((game) => game.year === Number(yearChosen))
    : teamGames;

  const renderTeam = (playerId) => {
    if (!team.players) {
      console.error("No players found for the team", team);
      return null;
    }
    return (
      team.players &&
      team.players
        .filter((player) => playerId.includes(player.jerseyNumber))
        .map((player) => (
          <DisplayPlayerCard key={player._id} player={player} teamId={id} />
        ))
    );
  };

  const uniqueYears = Array.from(new Set(teamGames.map((game) => game.year)));

  return (
    <div className={styles.wrapper}>
      <BackButton />
      <h1 className={styles.teamTitle}>{team && team.name}</h1>
      <ButtonTeamToggle setShowTeam={setShowTeam} />
      {showTeam ? (
        <div className={styles.teamListContainer}>
          <div className={styles.propsContainer}>{renderTeam([8, 9, 10])}</div>
          <div className={styles.secondRowContainer}>
            {renderTeam([11, 12])}
          </div>
          <div className="flex flex-wrap justify-center gap-1 mb-1">
            {renderTeam([13])}
          </div>
          <div className={styles.playmakersContainer}>{renderTeam([6, 7])}</div>
          <div className={styles.wingersContainer}>{renderTeam([5, 2])}</div>
          <div className={styles.centresContainer}>{renderTeam([4, 3])}</div>
          <div className={styles.fullbackContainer}>{renderTeam([1])}</div>
          <div className={styles.interchangeContainer}>
            {renderTeam([14, 15, 16, 17])}
          </div>
          <div className={styles.interchangeContainer}>
            {renderTeam([
              18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
              34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
            ])}
          </div>
        </div>
      ) : (
        // Add styling for Games Played and Add Game layout
        <div className={styles.allGamesContainer}>
          <div className={styles.gamesHeadingContainer}>
            <h1>Filter Games By Year</h1>
          </div>
          <div className={styles.gameForm}>
            <form>
              <label htmlFor="year">Year:</label>
              <select
                onChange={(e) => {
                  const chosenYear = e.target.value;
                  console.log("Year chosen:", chosenYear); // Debug line
                  setYearChosen(chosenYear);
                }}
                value={yearChosen}
              >
                <option value="">Select a Year</option>
                {teamGames &&
                  uniqueYears.map((year) => {
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                {/* <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option> */}
              </select>
            </form>
          </div>

          {teamGames &&
            renderTeamGame.map((game) => {
              return (
                <div
                  className={styles.gamesContainer}
                  key={`${game._id}- ${game.year}`}
                >
                  <div className={styles.game}>
                    <div className={styles.homeSection}>
                      <p className={styles.entriesHeading}>Home </p>
                      <p className={styles.entries}>{game.homeTeam.name}</p>
                    </div>
                    {/* <div className="mr-2">
                      <p className={styles.entriesHeading}>VS</p>
                    </div> */}
                    <div className={styles.awaySection}>
                      <p className={styles.entriesHeading}>Away</p>
                      <p className={styles.entries}>{game.awayTeam.name}</p>
                    </div>
                    <div>
                      <p className={styles.entriesHeading}>Score</p>
                      <div className="flex">
                        <p className={styles.entries}>{game.homeTeamScore}</p>
                        <p className="w-full flex justify-center items-center text-white">
                          -
                        </p>
                        <p className={styles.entries}>{game.awayTeamScore}</p>
                      </div>
                    </div>
                    <div>
                      <p className={styles.entriesHeading}>Year</p>
                      <p className={styles.entries}>{game.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default IndividualTeamPage;
