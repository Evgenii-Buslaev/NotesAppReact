import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

import styles from "../css/components/SearchNote.module.css";

import { closeSearch } from "../handlers/search_handlers";

function SearchNote({ value, change, search, setValue, setFoundList }) {
  function closeSearchSession() {
    closeSearch(setValue, setFoundList);
  }

  return (
    <div className={styles.searchNote}>
      <button>
        <BsSearch className={styles.icons} />
      </button>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={(e) => {
          change(e.target.value);
          search(e.target.value);
        }}
        onKeyPress={(e) => {
          console.log(e.charCode);
        }}
      />
      <button onClick={closeSearchSession}>
        <GrClose className={styles.icons} />
      </button>
    </div>
  );
}

export default SearchNote;
