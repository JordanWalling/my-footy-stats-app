import styles from "./ButtonTeamToggle.module.css";

function ButtonTeamToggle({ setShowTeam }) {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => setShowTeam(true)}>Team List</button>
      <button onClick={() => setShowTeam(false)}>Games</button>
    </div>
  );
}

export default ButtonTeamToggle;
