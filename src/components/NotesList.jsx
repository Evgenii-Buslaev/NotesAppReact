import styles from "../css/components/NotesList.module.css";
import NoteInput from "./NoteInput";
/* import BackgroundOfEmptyList from "./BackgroundOfEmptyList"; */
import Note from "./Note";

import { useState } from "react";

/* import notes from "../icons/menu/storage.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png"; */

function NotesList() {
  /* const [notes, setNotes] = useState([]); */
  const [inputNote, setInputNote] = useState("");

  function createNote() {}
  function changeInput(e) {
    setInputNote(e.target.value);
  }
  return (
    <div className={styles.notesCont}>
      <NoteInput change={changeInput} />
      <Note text="Тестовая заметка" />

      {/* {notes ? (
        notes.map((elem) => <Note text={elem.text} />)
      ) : (
        <BackgroundOfEmptyList>
          <img src={notes} alt="notes-empty-background" />
          <h3>Здесь будут храниться Ваши заметки.</h3>
        </BackgroundOfEmptyList>
      )} */}
    </div>
  );
}

export default NotesList;
