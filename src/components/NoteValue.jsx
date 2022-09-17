import { useState, useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";

import styles from "../css/components/Note.module.css";
import { AppContext } from "../handlers/context";


function NoteValue({ text, id }) {
  const { storage, setStorage, edit } = useContext(AppContext)
  const [noteText, setNoteText] = useState(text);

  function changeTextareaValue(e) {
    setNoteText(e.target.value);
    edit(id, e.target.value, storage, setStorage);
  }

  return (
    <TextareaAutosize
      className={styles.noteText}
      value={noteText}
      onChange={changeTextareaValue}
    />
  );
}

export default NoteValue;
