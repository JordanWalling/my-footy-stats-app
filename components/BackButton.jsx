import { TbChevronLeft } from "react-icons/tb";
import styles from "./BackButton.module.css";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link href={`/dashboard/team`}>
      <button className={styles.button}>
        <TbChevronLeft />
      </button>
    </Link>
  );
};
export default BackButton;
