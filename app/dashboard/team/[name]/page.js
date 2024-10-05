"use client";
import DisplayCard from "@/components/DisplayCard";
import ButtonTeamToggle from "@/components/ButtonTeamToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./IndividualTeamPage.module.css";
import DisplayPlayerCard from "@/components/DisplayPlayerCard";
import { useState } from "react";
import BackButton from "@/components/BackButton";

function IndividualTeamPage() {
  const [showTeam, setShowTeam] = useState(true);
  const [yearChosen, setYearChosen] = useState("");
  const pathname = usePathname();
  const teamName = pathname.split("/");
  const showTeamName = teamName[3];
  const capitalizedTeamName = showTeamName.replace(/([A-Z])/g, " $1");
  console.log(capitalizedTeamName);

  const team = [
    {
      id: 1,
      name: "Tom Trbojevic",
      position: "Fullback",
      jerseyNumber: 1,
    },
    {
      id: 2,
      name: "Jason Saab",
      position: "Right Wing",
      jerseyNumber: 2,
    },
    {
      id: 3,
      name: "Reuben Garrick",
      position: "Right Centre",
      jerseyNumber: 3,
    },
    {
      id: 4,
      name: "Tolu Koula",
      position: "Left Centre",
      jerseyNumber: 4,
    },
    {
      id: 5,
      name: "Tommy Talau",
      position: "Left Wing",
      jerseyNumber: 5,
    },
    {
      id: 6,
      name: "Luke Brooks",
      position: "Five Eight",
      jerseyNumber: 6,
    },
    {
      id: 7,
      name: "Daly Cherry Evans",
      position: "Half Back",
      jerseyNumber: 7,
    },
    {
      id: 8,
      name: "Taniela Paseka",
      position: "Prop",
      jerseyNumber: 8,
    },
    {
      id: 9,
      name: "Lachlan Croker",
      position: "Hooker",
      jerseyNumber: 9,
    },
    {
      id: 10,
      name: "Matt Lodge",
      position: "Prop",
      jerseyNumber: 10,
    },
    {
      id: 11,
      name: "Haumole Olakuatau",
      position: "Second Row",
      jerseyNumber: 11,
    },
    {
      id: 12,
      name: "Karl Lawton",
      position: "Second Row",
      jerseyNumber: 12,
    },
    {
      id: 13,
      name: "Jake Trbojevic",
      position: "Lock",
      jerseyNumber: 13,
    },
    {
      id: 14,
      name: "Nathan Brown",
      position: "Interchange",
      jerseyNumber: 14,
    },
    {
      id: 15,
      name: "Ben Trbojevic",
      position: "Interchange",
      jerseyNumber: 15,
    },
    {
      id: 16,
      name: "Ethan Bullemor",
      position: "Interchange",
      jerseyNumber: 16,
    },
    {
      id: 17,
      name: "Josh Aloai",
      position: "Interchange",
      jerseyNumber: 17,
    },
    {
      id: 18,
      name: "Tof Sippley",
      position: "Reserves",
      jerseyNumber: 18,
    },
    {
      id: 19,
      name: "Brad Parker",
      position: "Reserves",
      jerseyNumber: 19,
    },
    {
      id: 20,
      name: "Aaron Woods",
      position: "Reserves",
      jerseyNumber: 20,
    },
    {
      id: 21,
      name: "Jamie Humphreys",
      position: "Reserves",
      jerseyNumber: 21,
    },
    {
      id: 22,
      name: "Clayton Faulolo",
      position: "Reserves",
      jerseyNumber: 22,
    },
    {
      id: 23,
      name: "Gordon C.K.T",
      position: "Reserves",
      jerseyNumber: 23,
    },
    {
      id: 24,
      name: "Raymond Vaega",
      position: "Reserves",
      jerseyNumber: 24,
    },
  ];

  const games = [
    {
      id: 1,
      year: 2024,
      homeTeam: "Sea Eagles",
      awayTeam: "Raiders",
      homeTeamScore: 26,
      awayTeamScore: 20,
    },
    {
      id: 2,
      year: 2024,
      homeTeam: "Raiders",
      awayTeam: "Sea Eagles",
      homeTeamScore: 6,
      awayTeamScore: 32,
    },
    {
      id: 3,
      year: 2024,
      homeTeam: "Sea Eagles",
      awayTeam: "Roosters",
      homeTeamScore: 25,
      awayTeamScore: 19,
    },
    {
      id: 4,
      year: 2024,
      homeTeam: "Roosters",
      awayTeam: "Sea Eagles",
      homeTeamScore: 32,
      awayTeamScore: 12,
    },
    {
      id: 5,
      year: 2023,
      homeTeam: "Sea Eagles",
      awayTeam: "Raiders",
      homeTeamScore: 26,
      awayTeamScore: 20,
    },
    {
      id: 6,
      year: 2023,
      homeTeam: "Raiders",
      awayTeam: "Sea Eagles",
      homeTeamScore: 6,
      awayTeamScore: 32,
    },
    {
      id: 7,
      year: 2023,
      homeTeam: "Sea Eagles",
      awayTeam: "Roosters",
      homeTeamScore: 25,
      awayTeamScore: 19,
    },
    {
      id: 8,
      year: 2023,
      homeTeam: "Roosters",
      awayTeam: "Sea Eagles",
      homeTeamScore: 32,
      awayTeamScore: 12,
    },
    {
      id: 9,
      year: 2022,
      homeTeam: "Sea Eagles",
      awayTeam: "Raiders",
      homeTeamScore: 26,
      awayTeamScore: 20,
    },
    {
      id: 10,
      year: 2022,
      homeTeam: "Raiders",
      awayTeam: "Sea Eagles",
      homeTeamScore: 6,
      awayTeamScore: 32,
    },
    {
      id: 11,
      year: 2022,
      homeTeam: "Sea Eagles",
      awayTeam: "Roosters",
      homeTeamScore: 25,
      awayTeamScore: 19,
    },
    {
      id: 12,
      year: 2022,
      homeTeam: "Roosters",
      awayTeam: "Sea Eagles",
      homeTeamScore: 32,
      awayTeamScore: 12,
    },
    {
      id: 12,
      year: 2022,
      homeTeam: "Roosters",
      awayTeam: "Sea Eagles",
      homeTeamScore: 40,
      awayTeamScore: 12,
    },
  ];

  const renderTeamGame = yearChosen
    ? games.filter((game) => game.year === Number(yearChosen))
    : games;

  const renderTeam = (playerId) => {
    return team
      .filter((player) => playerId.includes(player.jerseyNumber))
      .map((player) => (
        <DisplayPlayerCard
          key={player.id}
          player={player}
          showTeamName={showTeamName}
        />
      ));
  };

  return (
    <div className={styles.wrapper}>
      <BackButton />
      <h1 className={styles.teamTitle}>{capitalizedTeamName}</h1>
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
              17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
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
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </form>
          </div>

          {renderTeamGame.map((game) => {
            return (
              <>
                <div className={styles.gamesContainer}>
                  <div className={styles.game}>
                    <div className={styles.homeSection}>
                      <p className={styles.entriesHeading}>Home </p>
                      <p className={styles.entries}>{game.homeTeam}</p>
                    </div>
                    {/* <div className="mr-2">
                      <p className={styles.entriesHeading}>VS</p>
                    </div> */}
                    <div className={styles.awaySection}>
                      <p className={styles.entriesHeading}>Away</p>
                      <p className={styles.entries}>{game.awayTeam}</p>
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
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default IndividualTeamPage;
