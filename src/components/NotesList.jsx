import { useContext } from "react";

// styles
import styles from "../css/components/NotesList.module.css";

// components
import BackgroundOfEmptyList from "./BackgroundOfEmptyList";
import Note from "./Note";
import ImageButton from "../UI/ImageButton";
import { AppContext } from "../handlers/context";
import { clearSection } from "../handlers/note_handlers";

// icons
import notes from "../icons/menu/storage.png";
import collection from "../icons//menu/collection.png";
import recycleBin from "../icons//menu/recycle-bin.png";

const [
  notesBackgroundText,
  collectionBackgroundText,
  recycleBinBackgroundText,
] = [
  "Здесь будут храниться Ваши заметки.",
  "Здесь будет храниться коллекция Ваших заметок",
  "Здесь будут храниться удаленные заметки.",
];

function NotesList({ section }) {
  const { storage, setStorage } = useContext(AppContext);
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
    <>
      {section === "recycleBin" && itemsArray.length ? (
        <ImageButton
          onClickHandler={() => clearSection(storage, setStorage)}
          title="Очистить корзину"
          imageSrc={recycleBin}
          imageAlt="clear-recycle-bin-icon"
        />
      ) : null}
      <div className={styles.notesCont}>
        {itemsArray.length ? (
          itemsArray.map((elem) => (
            <Note
              id={elem.id}
              key={elem.id}
              section={section}
              text={elem.text}
              pinned={elem.pinned}
            />
          ))
        ) : (
          <BackgroundOfEmptyList>
            <img src={backgroundProps.icon} alt="notes-empty-background" />
            <h3>{backgroundProps.text}</h3>
          </BackgroundOfEmptyList>
        )}
      </div>
    </>
  );
}

export default NotesList;
