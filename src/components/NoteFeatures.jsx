import { useContext } from "react";

import { AppContext } from "../handlers/context";
import styles from "../css/components/Note.module.css";

import { replaceItem, deleteItem } from "../handlers/note_handlers";

// icons
import notes from "../icons//menu/storage.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png";

function NoteFeatures({ id, section }) {
  const { storage, setStorage } = useContext(AppContext);

  const noteButtons = [
    {
      title: "Переместить в заметки",
      src: notes,
      alt: "to-notes",
      section: "notes",
      onClick: () => replaceItem(id, "notes", storage, setStorage),
    },
    {
      title: "Переместить в коллекцию",
      src: collection,
      alt: "to-collection",
      section: "collection",
      onClick: () => replaceItem(id, "collection", storage, setStorage),
    },
    {
      title: "Переместить в корзину/удалить",
      src: recycleBin,
      alt: "to-recycle-bin/remove",
      section: "recycleBin",
      onClick: () => defineDeleting(id, storage, setStorage, section),
    },
  ];

  function defineDeleting(id, storage, setStorage, section) {
    if (section === "recycleBin") {
      deleteItem(id, storage, setStorage);
    } else {
      replaceItem(id, "recycleBin", storage, setStorage);
    }
  }

  return (
    <div className={styles.noteButtons}>
      {noteButtons.map((elem) => (
        <button title={elem.title} onClick={elem.onClick} key={elem.alt}>
          <img src={elem.src} alt={elem.alt}></img>
        </button>
      ))}
    </div>
  );
}

export default NoteFeatures;
