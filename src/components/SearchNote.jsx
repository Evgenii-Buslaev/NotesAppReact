import { useContext } from "react";

import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

import styles from "../css/components/SearchNote.module.css";

import { closeSearch } from "../handlers/search_handlers";
import { AppContext } from "../handlers/context";

function SearchNote() {
  const { appSearch } = useContext(AppContext);
  const { value, setValue, search, setFoundList } = appSearch;

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
          setValue(e.target.value);
          search(e.target.value);
        }}
      />
      <button onClick={closeSearchSession}>
        <GrClose className={styles.icons} />
      </button>
    </div>
  );
}

export default SearchNote;
