import { AiOutlineMenu } from "react-icons/ai";
import styles from "../css/UI/OpenMenuButton.module.css";

function OpenMenuButton() {
  return (
    <>
      <button>
        <AiOutlineMenu className={styles.openMenuBtn} />
      </button>
    </>
  );
}

export default OpenMenuButton;
