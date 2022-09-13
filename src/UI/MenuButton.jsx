import styles from "../css/UI/MenuButton.module.css";

function MenuButton({ active, children, change, chosenSection }) {
  const classes = active
    ? [styles.menuButton, styles.active].join(" ")
    : styles.menuButton;
  return (
    <button className={classes} onClick={() => change(chosenSection)}>
      {children}
    </button>
  );
}

export default MenuButton;
