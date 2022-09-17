import styles from "../css/components/Note.module.css";
import NoteFeatures from "./NoteFeatures";
import NoteValue from "./NoteValue";

function Note({ storage, setStorage, section, text, edit, id, move, remove }) {
  return (
    <div className={styles.note}>
      <NoteValue
        storage={storage}
        setStorage={setStorage}
        text={text}
        edit={edit}
        id={id}
      />
      <NoteFeatures
        section={section}
        storage={storage}
        setStorage={setStorage}
        move={move}
        remove={remove}
        id={id}
      />
    </div>
  );
}

export default Note;
