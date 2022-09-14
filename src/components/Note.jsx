import styles from "../css/components/Note.module.css";

// icons
import notes from "../icons//menu/storage.png";
import change from "../icons/note/edit.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png";
import removeItem from "../icons//menu/remove.png";

function Note({ text, edit, id, move, remove }) {
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
      title: "Редактировать",
      src: change,
      alt: "edit",
      onClick: () => edit(id),
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
      <h4 className={styles.noteText}>{text}</h4>
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
