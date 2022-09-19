import { useContext } from "react";

import { AppContext } from "../handlers/context";

import { AiOutlineMenu } from "react-icons/ai";
import styles from "../css/UI/OpenMenuButton.module.css";

function OpenMenuButton() {
  const { menu, openMenu } = useContext(AppContext);

  return (
    <>
      <button onClick={() => openMenu(!menu)}>
        <AiOutlineMenu className={styles.openMenuBtn} />
      </button>
    </>
  );
}

export default OpenMenuButton;
