import styles from "../css/components/BackgroundOfEmptyList.module.css";

function BackgroundOfEmptyList({ children }) {
  return <div className={styles.background}>{children}</div>;
}

export default BackgroundOfEmptyList;
