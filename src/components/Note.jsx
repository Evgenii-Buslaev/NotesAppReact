import { useState } from "react";

import styles from "../css/components/Note.module.css";
import NoteFeatures from "./NoteFeatures";

function Note({ text, edit, id, move, remove }) {
  const [noteText, setNoteText] = useState(text);

  return (
    <div className={styles.note}>
      <textarea
        className={styles.noteText}
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
          edit(id, e.target.value);
        }}
      />
      <NoteFeatures move={move} remove={remove} id={id} />
    </div>
  );
}

export default Note;
