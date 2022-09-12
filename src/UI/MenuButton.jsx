import styles from "../css/UI/MenuButton.module.css";

function MenuButton({ active, children }) {
  const classes = active
    ? [styles.menuButton, styles.active].join(" ")
    : styles.menuButton;
  return <button className={classes}>{children}</button>;
}

export default MenuButton;
