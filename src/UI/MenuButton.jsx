import { useContext } from "react";
import { AppContext } from "../handlers/context";

import styles from "../css/UI/MenuButton.module.css";

function MenuButton({
  active,
  toggleActive,
  id,
  children,
  change,
  chosenSection,
}) {
  const { menu } = useContext(AppContext);
  const classes = active
    ? [styles.menuButton, styles.active].join(" ")
    : styles.menuButton;

  return (
    <button
      className={classes}
      style={menu ? { width: "50%" } : { width: 50 }}
      onClick={() => {
        change(chosenSection);
        toggleActive(id);
      }}
    >
      {children}
    </button>
  );
}

export default MenuButton;
