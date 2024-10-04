import styles from "./TeamsListPage.module.css";
import DisplayTeamsList from "@/components/DisplayTeamsList";
function TeamsListPage() {
  const teamsList = [
    {
      id: 1,
      name: "Sea Eagles",
    },
    {
      id: 2,
      name: "Roosters",
    },
    {
      id: 3,
      name: "Panthers",
    },
    {
      id: 4,
      name: "Sharks",
    },
    {
      id: 5,
      name: "Bulldogs",
    },
    {
      id: 6,
      name: "Cowboys",
    },
    {
      id: 7,
      name: "Knights",
    },
    {
      id: 8,
      name: "Raiders",
    },
    {
      id: 9,
      name: "Dolphins",
    },
    {
      id: 10,
      name: "Broncos",
    },
  ];
  return (
    <div className={styles.teamsPageContainer}>
      <div className={styles.teamsListContainer}>
        {teamsList.map((team) => {
          return <DisplayTeamsList team={team} key={team.id} />;
        })}
      </div>
    </div>
  );
}

export default TeamsListPage;
