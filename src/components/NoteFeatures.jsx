import styles from "../css/components/Note.module.css";

// icons
import notes from "../icons//menu/storage.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png";
import removeItem from "../icons//menu/remove.png";

function NoteFeatures({ move, remove, id }) {
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
