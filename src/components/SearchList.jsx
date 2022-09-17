import Note from "./Note";
import styles from "../css/components/SearchList.css";

function SearchList({ list }) {
  return (
    <div className={styles.searchList}>
      {list.map((elem) => (
        <Note
          id={elem.id}
          key={elem.id}
          text={elem.text}
        />
      ))}
    </div>
  );
}

export default SearchList;
