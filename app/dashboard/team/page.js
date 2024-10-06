import styles from "./TeamsListPage.module.css";
import DisplayTeamsList from "@/components/DisplayTeamsList";
export default async function TeamsListPage() {
  const data = await fetch(process.env.WEBSITE_URL + "/teams");
  const teamList = await data.json();

  return (
    <div className={styles.teamsPageContainer}>
      <div className={styles.teamsListContainer}>
        {teamList &&
          teamList.map((team) => {
            return <DisplayTeamsList team={team} key={team.id} />;
          })}
      </div>
    </div>
  );
}
