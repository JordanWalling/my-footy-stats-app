import { TbChevronLeft } from "react-icons/tb";
import styles from "./BackButton.module.css";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button className={styles.button} onClick={() => router.back()}>
      <TbChevronLeft />
    </button>
  );
};
export default BackButton;
