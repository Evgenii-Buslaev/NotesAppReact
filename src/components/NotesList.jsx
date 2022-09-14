// styles
import styles from "../css/components/NotesList.module.css";

// components
import BackgroundOfEmptyList from "./BackgroundOfEmptyList";
import Note from "./Note";

// icons
import notes from "../icons/menu/storage.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png";

function NotesList({ storage, section, edit, move }) {
  const notesBackgroundText = "Здесь будут храниться Ваши заметки.";
  const collectionBackgroundText =
    "Здесь будет храниться коллекция Ваших заметок";
  const recycleBinBackgroundText = "Здесь будут храниться удаленные заметки.";

  const backgroundProps = { icon: null, text: null };

  if (section === "notes") {
    backgroundProps.icon = notes;
    backgroundProps.text = notesBackgroundText;
  }

  if (section === "collection") {
    backgroundProps.icon = collection;
    backgroundProps.text = collectionBackgroundText;
  }

  if (section === "recycleBin") {
    backgroundProps.icon = recycleBin;
    backgroundProps.text = recycleBinBackgroundText;
  }

  const itemsArray = storage.filter((elem) => elem.section === section);

  return (
    <div className={styles.notesCont}>
      {itemsArray.length ? (
        itemsArray.map((elem) => (
          <Note
            text={elem.text}
            id={elem.id}
            key={elem.id}
            edit={edit}
            move={move}
          />
        ))
      ) : (
        <BackgroundOfEmptyList>
          <img src={backgroundProps.icon} alt="notes-empty-background" />
          <h3>{backgroundProps.text}</h3>
        </BackgroundOfEmptyList>
      )}
    </div>
  );
}

export default NotesList;
