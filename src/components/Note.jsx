import { useContext } from "react";

import NoteFeatures from "./NoteFeatures";
import NoteValue from "./NoteValue";

import { changePinnedStatus } from "../handlers/note_handlers";
import { AppContext } from "../handlers/context";

import styles from "../css/components/Note.module.css";

function Note({ section, text, id, pinned }) {
  const { mode, storage, setStorage } = useContext(AppContext);

  return (
    <div
      className={`${styles.note} ${
        mode === "dark" ? styles.noteDark : styles.noteLight
      }`}
    >
      <NoteValue
        text={text}
        id={id}
        pinned={pinned}
        pin={() => changePinnedStatus(id, storage, setStorage)}
      />
      {pinned ? null : <NoteFeatures section={section} id={id} />}
    </div>
  );
}

export default Note;
