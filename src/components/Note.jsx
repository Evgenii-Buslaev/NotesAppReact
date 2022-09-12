import styles from "../css/components/Note.module.css";

import edit from "../icons/note/edit.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png";

function Note({ text }) {
  return (
    <div className={styles.note}>
      <h4 className={styles.noteText}>{text}</h4>
      <div className={styles.noteButtons}>
        <button title="Переместить в коллекцию">
          <img src={collection} alt="to-collection" />
        </button>
        <button title="Редактировать">
          <img src={edit} alt="edit" />
        </button>
        <button title="Переместить в корзину">
          <img src={recycleBin} alt="to-recycle-bin" />
        </button>
      </div>
    </div>
  );
}

export default Note;
