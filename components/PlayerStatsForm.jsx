import DisplayCard from "./DisplayCard";
import styles from "@/app/dashboard/team/[id]/[playerId]/IndividualPlayerStats.module.css";
const PlayerStatsForm = ({ teamChosen, setTeamChosen }) => {
  return (
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
            <option value="Roosters">Roosters</option>
            <option value="Rabbitohs">Rabbitohs</option>
          </select>
        </div>
      </DisplayCard>
    </form>
  );
};
export default PlayerStatsForm;
