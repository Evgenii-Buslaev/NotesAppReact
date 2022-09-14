import styles from "../css/components/Note.module.css";

import change from "../icons/note/edit.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png";

function Note({ text, edit, id, move }) {
  return (
    <div className={styles.note}>
      <h4 className={styles.noteText}>{text}</h4>
      <div className={styles.noteButtons}>
        <button
          title="Переместить в коллекцию"
          onClick={() => move(id, "collection")}
        >
          <img src={collection} alt="to-collection" />
        </button>
        <button title="Редактировать" onClick={() => edit(id)}>
          <img src={change} alt="edit" />
        </button>
        <button
          title="Переместить в корзину/удалить"
          onClick={() => move(id, "recycleBin")}
        >
          <img src={recycleBin} alt="to-recycle-bin" />
        </button>
      </div>
    </div>
  );
}

export default Note;
