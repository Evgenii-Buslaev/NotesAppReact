import styles from "../css/components/Header.module.css";
import iconClasses from "../css/icons.module.css";

import OpenMenuButton from "../UI/OpenMenuButton";
import SearchNote from "./SearchNote";
import { GiNotebook } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";

function Header({ value, change, search, setValue, setFoundList }) {
  return (
    <div className={styles.header}>
      <section className={styles.logoCont}>
        <OpenMenuButton />
        <GiNotebook className={iconClasses.icon} />
        <h1>Заметки</h1>
      </section>
      <SearchNote
        value={value}
        change={change}
        search={search}
        setValue={setValue}
        setFoundList={setFoundList}
      />
      <button>
        <MdDarkMode className={iconClasses.icon} />
      </button>
    </div>
  );
}

export default Header;
