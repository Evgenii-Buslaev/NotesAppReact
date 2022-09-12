import styles from "../css/components/NotesList.module.css";
import NoteInput from "./NoteInput";
/* import BackgroundOfEmptyList from "./BackgroundOfEmptyList"; */
import Note from "./Note";

/* import notes from "../icons/menu/storage.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png"; */

function NotesList() {
  return (
    <div className={styles.notesCont}>
      <NoteInput />
      <Note text="Тестовая заметка" />
      {/* <BackgroundOfEmptyList>
        <img src={notes} alt="notes-empty-background" />
        <h3>Здесь будут храниться Ваши заметки.</h3>
      </BackgroundOfEmptyList> */}
    </div>
  );
}

export default NotesList;
