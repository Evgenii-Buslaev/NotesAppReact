import styles from "../css/components/Header.module.css";
import iconClasses from "../css/icons.module.css";

import OpenMenuButton from "../UI/OpenMenuButton";
import { GiNotebook } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";

function Header() {
  return (
    <div className={styles.header}>
      <OpenMenuButton />
      <GiNotebook className={iconClasses.icon} />
      <h1>Заметки</h1>
      <MdDarkMode className={iconClasses.icon} />
    </div>
  );
}

export default Header;
