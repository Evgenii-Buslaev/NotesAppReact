import { useContext } from "react";

import { AppContext } from "../handlers/context";

import { AiOutlineMenu } from "react-icons/ai";
import styles from "../css/UI/OpenMenuButton.module.css";

function OpenMenuButton() {
  const { appMenu } = useContext(AppContext);
  const { menu, openCloseMenu } = appMenu;

  return (
    <>
      <button onClick={() => openCloseMenu(!menu)}>
        <AiOutlineMenu className={styles.openMenuBtn} />
      </button>
    </>
  );
}

export default OpenMenuButton;
