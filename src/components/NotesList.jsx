// styles
import styles from "../css/components/NotesList.module.css";

// components
import BackgroundOfEmptyList from "./BackgroundOfEmptyList";
import Note from "./Note";

// icons
import notes from "../icons/menu/storage.png";
/* import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png"; */

function NotesList({ storage }) {
  return (
    <div className={styles.notesCont}>
      {storage.length ? (
        storage.map((elem) => (
          <Note text={elem.text} id={elem.id} key={elem.id} />
        ))
      ) : (
        <BackgroundOfEmptyList>
          <img src={notes} alt="notes-empty-background" />
          <h3>Здесь будут храниться Ваши заметки.</h3>
        </BackgroundOfEmptyList>
      )}
    </div>
  );
}

export default NotesList;
