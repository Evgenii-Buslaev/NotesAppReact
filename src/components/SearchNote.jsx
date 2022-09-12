import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

import styles from "../css/components/SearchNote.module.css";

function SearchNote() {
  return (
    <div className={styles.searchNote}>
      <BsSearch />
      <input className={styles.searchInput} type="text" placeholder="Поиск" />
      <GrClose />
    </div>
  );
}

export default SearchNote;
