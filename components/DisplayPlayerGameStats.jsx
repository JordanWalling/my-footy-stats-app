import styles from "@/app/dashboard/team/[id]/[playerId]/IndividualPlayerStats.module.css";

const DisplayPlayerGameStats = ({ game }) => {
  return (
    <li key={game.id} className={styles.li}>
      <div className={styles.statGroup}>
        <div className={styles.statName}>
          <p>Opposition: </p>
          <p>Tries: </p>
          <p>Try Assists: </p>
          <p>Line Breaks: </p>
          <p>Metres Run: </p>
          <p>Tackles: </p>
          <p>Missed Tackles: </p>
          <p>Tackle Breaks: </p>
          <p>Location: </p>
        </div>
        <div className={styles.statValue}>
          <p>{game.opposition ? game.opposition?.name : "Unknown"}</p>
          <p>{game.tries}</p>
          <p>{game.tryAssists}</p>
          <p>{game.lineBreaks}</p>
          <p>{game.metresRun}</p>
          <p>{game.tackles}</p>
          <p>{game.missedTackles}</p>
          <p>{game.tackleBreaks}</p>
          <p className={styles.location}>{game.location}</p>
        </div>
      </div>
    </li>
  );
};
export default DisplayPlayerGameStats;
