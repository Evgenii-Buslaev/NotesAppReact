import { useContext } from "react";

import NoteFeatures from "./NoteFeatures";
import NoteValue from "./NoteValue";

import { AppContext } from "../handlers/context";

import styles from "../css/components/Note.module.css";

function Note({ section, text, id }) {
  const { mode } = useContext(AppContext);

  return (
    <div
      className={`${styles.note} ${
        mode === "dark" ? styles.noteDark : styles.noteLight
      }`}
    >
      <NoteValue text={text} id={id} />
      <NoteFeatures section={section} id={id} />
    </div>
  );
}

export default Note;
