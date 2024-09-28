"use client";
import { usePathname } from "next/navigation";

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
  ];

  return (
    <div className="h-full">
      <h1 className="text-white">Welcome to the {capitalizedTeamName} page</h1>
      <div>
        {team.map((player) => (
          <div key={player.id} className="text-white">
            <h2>{player.name}</h2>
            <p>Position: {player.position}</p>
            <p>Jersey Number: {player.jerseyNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndividualTeamPage;
