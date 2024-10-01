"use client";
import DisplayCard from "@/components/DisplayCard";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./IndividualTeamPage.module.css";
function IndividualTeamPage() {
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

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.teamTitle}>{capitalizedTeamName}</h1>
      <div className={styles.teamListContainer}>
        <div className={styles.propsContainer}>
          {team.map((player) =>
            player.jerseyNumber === 8 ||
            player.jerseyNumber === 9 ||
            player.jerseyNumber === 10 ? (
              <>
                <Link href={`/dashboard/team/${showTeamName}/${player.id}`}>
                  <DisplayCard key={player.id} className="w-4 h-4">
                    <div className="flex flex-col justify-center items-center">
                      <h3
                        className={
                          player.name.length < 14 ? `text-sm` : `text-xs`
                        }
                      >
                        {player.name}
                      </h3>
                      <p className="text-lg">#{player.jerseyNumber}</p>
                      <p className="text-sm">{player.position}</p>
                    </div>
                  </DisplayCard>
                </Link>
              </>
            ) : null
          )}
        </div>
        <div className={styles.secondRowContainer}>
          {team.map((player) =>
            player.jerseyNumber === 11 || player.jerseyNumber === 12 ? (
              <DisplayCard key={player.id} className="">
                <div className="flex flex-col justify-center items-center">
                  <h3
                    className={player.name.length < 14 ? `text-sm` : `text-xs`}
                  >
                    {player.name}
                  </h3>
                  <p className="text-lg">#{player.jerseyNumber}</p>
                  <p className="text-sm">{player.position}</p>
                </div>
              </DisplayCard>
            ) : null
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-1 mb-1">
          {team.map((player) =>
            player.jerseyNumber === 13 ? (
              <DisplayCard key={player.id} className="">
                <div className="flex flex-col justify-center items-center">
                  <h3
                    className={player.name.length < 14 ? `text-sm` : `text-xs`}
                  >
                    {player.name}
                  </h3>
                  <p className="text-lg">#{player.jerseyNumber}</p>
                  <p className="text-sm">{player.position}</p>
                </div>
              </DisplayCard>
            ) : null
          )}
        </div>
        <div className={styles.playmakersContainer}>
          {team.map((player) =>
            player.jerseyNumber === 6 || player.jerseyNumber === 7 ? (
              <DisplayCard key={player.id} className="">
                <div className="flex flex-col justify-around items-center">
                  <h3
                    className={player.name.length < 14 ? `text-sm` : `text-xs`}
                  >
                    {player.name}
                  </h3>
                  <p className="text-lg">#{player.jerseyNumber}</p>
                  <p className="text-sm">{player.position}</p>
                </div>
              </DisplayCard>
            ) : null
          )}
        </div>
        <div className={styles.wingersContainer}>
          {team.map((player) =>
            player.jerseyNumber === 5 || player.jerseyNumber === 2 ? (
              <DisplayCard key={player.id} className="">
                <div className="flex flex-col justify-around items-center">
                  <h3
                    className={player.name.length < 14 ? `text-sm` : `text-xs`}
                  >
                    {player.name}
                  </h3>
                  <p className="text-lg">#{player.jerseyNumber}</p>
                  <p className="text-sm">{player.position}</p>
                </div>
              </DisplayCard>
            ) : null
          )}
        </div>
        <div className={styles.centresContainer}>
          {team.map((player) =>
            player.jerseyNumber === 4 || player.jerseyNumber === 3 ? (
              <DisplayCard key={player.id} className="">
                <div className="flex flex-col justify-around items-center">
                  <h3
                    className={player.name.length < 14 ? `text-sm` : `text-xs`}
                  >
                    {player.name}
                  </h3>
                  <p className="text-lg">#{player.jerseyNumber}</p>
                  <p className="text-sm">{player.position}</p>
                </div>
              </DisplayCard>
            ) : null
          )}
        </div>
        <div className={styles.fullbackContainer}>
          {team.map((player) =>
            player.jerseyNumber === 1 ? (
              <DisplayCard key={player.id} className="">
                <div className="flex flex-col justify-around items-center">
                  <h3
                    className={player.name.length < 14 ? `text-sm` : `text-xs`}
                  >
                    {player.name}
                  </h3>
                  <p className="text-lg">#{player.jerseyNumber}</p>
                  <p className="text-sm">{player.position}</p>
                </div>
              </DisplayCard>
            ) : null
          )}
        </div>
        <div className={styles.interchangeContainer}>
          {team.map((player) =>
            player.jerseyNumber === 14 ||
            player.jerseyNumber === 15 ||
            player.jerseyNumber === 16 ||
            player.jerseyNumber === 17 ? (
              <DisplayCard key={player.id} className="">
                <div className="flex flex-col justify-around items-center">
                  <h3
                    className={player.name.length < 14 ? `text-sm` : `text-xs`}
                  >
                    {player.name}
                  </h3>
                  <p className="text-lg">#{player.jerseyNumber}</p>
                  <p className="text-sm">{player.position}</p>
                </div>
              </DisplayCard>
            ) : null
          )}
        </div>
        <div className={styles.interchangeContainer}>
          {team.map((player) =>
            player.jerseyNumber === 17 ||
            player.jerseyNumber === 18 ||
            player.jerseyNumber === 19 ||
            player.jerseyNumber === 20 ||
            player.jerseyNumber === 21 ||
            player.jerseyNumber === 22 ||
            player.jerseyNumber === 23 ||
            player.jerseyNumber === 24 ||
            player.jerseyNumber === 25 ||
            player.jerseyNumber === 26 ||
            player.jerseyNumber === 27 ||
            player.jerseyNumber === 28 ||
            player.jerseyNumber === 29 ||
            player.jerseyNumber === 30 ? (
              <DisplayCard key={player.id} className="">
                <div className="flex flex-col justify-around items-center">
                  <h3
                    className={player.name.length < 14 ? `text-sm` : `text-xs`}
                  >
                    {player.name}
                  </h3>
                  <p className="text-lg">#{player.jerseyNumber}</p>
                  <p className="text-sm">{player.position}</p>
                </div>
              </DisplayCard>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default IndividualTeamPage;
