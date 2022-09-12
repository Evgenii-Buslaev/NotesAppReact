import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

import styles from "../css/components/SearchNote.module.css";

function SearchNote() {
  return (
    <div className={styles.searchNote}>
      <button>
        <BsSearch className={styles.icons} />
      </button>
      <input className={styles.searchInput} type="text" placeholder="Поиск" />
      <button>
        <GrClose className={styles.icons} />
      </button>
    </div>
  );
}

export default SearchNote;
