import { useState, useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";

import styles from "../css/components/Note.module.css";
import { AppContext } from "../handlers/context";
import ImageButton from "../UI/ImageButton";

import pin from "../icons/note/pin.png";
import unpin from "../icons/note/pinned.png";

function NoteValue({ text, id }) {
  const { storage, setStorage, edit } = useContext(AppContext);
  const [noteText, setNoteText] = useState(text);

  function changeTextareaValue(e) {
    setNoteText(e.target.value);
    edit(id, e.target.value, storage, setStorage);
  }

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <TextareaAutosize
        className={styles.noteText}
        value={noteText}
        onChange={changeTextareaValue}
      />
      <ImageButton
        title="Закрепить"
        imageSrc={pin}
        imageAlt="pin note"
        onClickHandler={() => console.log("pin")}
      />
    </div>
  );
}

export default NoteValue;
