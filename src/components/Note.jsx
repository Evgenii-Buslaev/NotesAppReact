import styles from "../css/components/Note.module.css";

import { useState } from "react";

// icons
import notes from "../icons//menu/storage.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png";
import removeItem from "../icons//menu/remove.png";

function Note({ text, edit, id, move, remove }) {
  const [noteText, setNoteText] = useState(text);

  const noteButtons = [
    {
      title: "Переместить в заметки",
      src: notes,
      alt: "to-notes",
      section: "notes",
      onClick: () => move(id, "notes"),
    },
    {
      title: "Переместить в коллекцию",
      src: collection,
      alt: "to-collection",
      section: "collection",
      onClick: () => move(id, "collection"),
    },
    {
      title: "Переместить в корзину",
      src: recycleBin,
      alt: "to-recycle-bin",
      section: "recycleBin",
      onClick: () => move(id, "recycleBin"),
    },

    {
      title: "Удалить",
      src: removeItem,
      alt: "delete",
      onClick: () => remove(id),
    },
  ];

  return (
    <div className={styles.note}>
      <input
        className={styles.noteText}
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
          edit(id, e.target.value);
        }}
      />
      <div className={styles.noteButtons}>
        {noteButtons.map((elem) => (
          <button title={elem.title} onClick={elem.onClick} key={elem.alt}>
            <img src={elem.src} alt={elem.alt}></img>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Note;
