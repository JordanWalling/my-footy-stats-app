import styles from "@/components/DisplayCard.module.css";

function DisplayCard({ children }) {
  return <div className={styles.cardContainer}>{children}</div>;
}

export default DisplayCard;
