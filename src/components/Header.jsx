import OpenMenuButton from "../UI/OpenMenuButton";
import SearchNote from "./SearchNote";
import ModeButton from "../UI/ModeButton";
import logo from "../icons/logo.png";

import styles from "../css/components/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <section className={styles.logoCont}>
        <OpenMenuButton />
        <img src={logo} alt={logo} style={{ width: "3rem" }} />
        <h1>Заметки</h1>
      </section>
      <section className={styles.searchCont}>
        <SearchNote />
        <ModeButton />
      </section>
    </div>
  );
}

export default Header;
