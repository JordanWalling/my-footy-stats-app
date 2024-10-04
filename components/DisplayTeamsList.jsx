import Link from "next/link";
import DisplayCard from "./DisplayCard";

const DisplayTeamsList = ({ team }) => {
  return (
    <Link href={`/dashboard/team/${team.name.trim().replace(/ /g, "")}`}>
      <DisplayCard>
        <h3>{team.name}</h3>
      </DisplayCard>
    </Link>
  );
};
export default DisplayTeamsList;
