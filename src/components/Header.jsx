import { GiNotebook } from "react-icons/gi";

import OpenMenuButton from "../UI/OpenMenuButton";
import SearchNote from "./SearchNote";
import ModeButton from "../UI/ModeButton";

import styles from "../css/components/Header.module.css";
import iconClasses from "../css/icons.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <section className={styles.logoCont}>
        <OpenMenuButton />
        <GiNotebook className={iconClasses.icon} />
        <h1>Заметки</h1>
      </section>
      <SearchNote />
      <ModeButton />
    </div>
  );
}

export default Header;
