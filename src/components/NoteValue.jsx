import { useState } from "react";

import styles from "../css/components/Note.module.css";

function NoteValue({ text, edit, id }) {
  const [noteText, setNoteText] = useState(text);

  return (
    <textarea
      className={styles.noteText}
      value={noteText}
      onChange={(e) => {
        setNoteText(e.target.value);
        edit(id, e.target.value);
      }}
    />
  );
}

export default NoteValue;
