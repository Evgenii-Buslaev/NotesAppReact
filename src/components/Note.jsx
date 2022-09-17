import styles from "../css/components/Note.module.css";
import NoteFeatures from "./NoteFeatures";
import NoteValue from "./NoteValue";

function Note({ section, text, id }) {
  return (
    <div className={styles.note}>
      <NoteValue
        text={text}
        id={id}
      />
      <NoteFeatures
        section={section}
        id={id}
      />
    </div>
  );
}

export default Note;
