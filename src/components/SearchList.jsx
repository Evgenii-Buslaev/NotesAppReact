import Note from "./Note";
import styles from "../css/components/SearchList.css";

function SearchList({ list, edit, move, remove, storage, setStorage }) {
  return (
    <div className={styles.searchList}>
      {list.map((elem) => (
        <Note
          id={elem.id}
          key={elem.id}
          text={elem.text}
          edit={edit}
          move={move}
          remove={remove}
          storage={storage}
          setStorage={setStorage}
        />
      ))}
    </div>
  );
}

export default SearchList;
