"use client";
import Link from "next/link";
import DisplayCard from "./DisplayCard";

const DisplayPlayerCard = ({ player, teamId }) => {
  return (
    <>
      <Link href={`/dashboard/team/${teamId}/${player.id}`}>
        <DisplayCard key={player.id} className="w-4 h-4">
          <div className="flex flex-col justify-center items-center">
            <h3 className={player.name.length < 14 ? `text-sm` : `text-xs`}>
              {player.name}
            </h3>
            <p className="text-lg">#{player.jerseyNumber}</p>
            <p className="text-sm">{player.position}</p>
          </div>
        </DisplayCard>
      </Link>
    </>
  );
};
export default DisplayPlayerCard;
