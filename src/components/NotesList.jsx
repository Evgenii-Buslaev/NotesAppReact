import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// styles
import styles from "../css/components/NotesList.module.css";

// components
import NoteInput from "./NoteInput";
import BackgroundOfEmptyList from "./BackgroundOfEmptyList";
import Note from "./Note";

// icons
import notes from "../icons/menu/storage.png";
/* import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png"; */

function NotesList() {
  const [notesList, setNotesList] = useState([]);
  const [inputNote, setInputNote] = useState("");

  function createNote() {
    setNotesList([...notesList, { text: inputNote, id: uuidv4() }]);
    setInputNote("");
    console.log(notesList);
  }

  function changeInput(e) {
    setInputNote(e.target.value);
  }

  return (
    <div className={styles.notesCont}>
      <NoteInput change={changeInput} add={createNote} />
      {notesList.length ? (
        notesList.map((elem) => (
          <Note text={elem.text} id={elem.id} key={elem.id} />
        ))
      ) : (
        <BackgroundOfEmptyList>
          <img src={notes} alt="notes-empty-background" />
          <h3>Здесь будут храниться Ваши заметки.</h3>
        </BackgroundOfEmptyList>
      )}
    </div>
  );
}

export default NotesList;
