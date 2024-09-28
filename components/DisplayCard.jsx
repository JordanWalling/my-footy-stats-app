import styles from "@/components/DisplayCard.module.css";

function DisplayCard({ team }) {
  return (
    <div key={team.id} className={styles.cardContainer}>
      <h2>{team.name}</h2>
    </div>
  );
}

export default DisplayCard;
