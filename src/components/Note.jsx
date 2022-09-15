import styles from "../css/components/Note.module.css";
import NoteFeatures from "./NoteFeatures";
import NoteValue from "./NoteValue";

function Note({ text, edit, id, move, remove }) {
  return (
    <div className={styles.note}>
      <NoteValue text={text} edit={edit} id={id} />
      <NoteFeatures move={move} remove={remove} id={id} />
    </div>
  );
}

export default Note;
