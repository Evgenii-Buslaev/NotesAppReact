import { useState, useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";

import ImageButton from "../UI/ImageButton";

import { AppContext } from "../handlers/context";
import { editItem } from "../handlers/note_handlers";

import styles from "../css/components/Note.module.css";

import pinImg from "../icons/note/pin.png";
import unpinImg from "../icons/note/pinned.png";

function NoteValue({ text, id, pinned, pin }) {
  const { appStorage } = useContext(AppContext);
  const { storage, setStorage } = appStorage;
  const [noteText, setNoteText] = useState(text);

  function changeTextareaValue(e) {
    setNoteText(e.target.value);
    editItem(id, e.target.value, storage, setStorage);
  }

  return (
    <div className={styles.pinText}>
      <TextareaAutosize
        className={styles.noteText}
        value={noteText}
        onChange={changeTextareaValue}
      />
      {!pinned ? (
        <ImageButton
          title="Закрепить"
          imageSrc={pinImg}
          imageAlt="pin note"
          onClickHandler={pin}
        />
      ) : (
        <ImageButton
          title="Открепить"
          imageSrc={unpinImg}
          imageAlt="unpin note"
          onClickHandler={pin}
        />
      )}
    </div>
  );
}

export default NoteValue;
