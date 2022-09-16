import styles from "../css/components/Note.module.css";

// icons
import notes from "../icons//menu/storage.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png";
import removeItem from "../icons//menu/remove.png";

function NoteFeatures({ move, remove, id, storage, setStorage }) {
  const noteButtons = [
    {
      title: "Переместить в заметки",
      src: notes,
      alt: "to-notes",
      section: "notes",
      onClick: () => move(id, "notes", storage, setStorage),
    },
    {
      title: "Переместить в коллекцию",
      src: collection,
      alt: "to-collection",
      section: "collection",
      onClick: () => move(id, "collection", storage, setStorage),
    },
    {
      title: "Переместить в корзину",
      src: recycleBin,
      alt: "to-recycle-bin",
      section: "recycleBin",
      onClick: () => move(id, "recycleBin", storage, setStorage),
    },
    {
      title: "Удалить",
      src: removeItem,
      alt: "delete",
      onClick: () => remove(id, storage, setStorage),
    },
  ];

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
