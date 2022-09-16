import classes from "../css/components/NoteInput.module.css";

import ImageButton from "..//UI/ImageButton";

// icons
import confirmIcon from "../icons/note-input/confirm.png";
import clearList from "../icons/menu/recycle-bin.png";

function NoteInput({ setStorage, change, create, value, clearAll }) {
  return (
    <>
      <form className={classes.noteInputCont} onSubmit={create}>
        <input
          type="sumbit"
          placeholder="Заметка..."
          onChange={change}
          value={value}
        ></input>
      </form>
      <div className={classes.formButtons}>
        <ImageButton
          onClickHandler={create}
          title="Создать заметку"
          imageSrc={confirmIcon}
          imageAlt="confirm-button-icon"
        />
        <ImageButton
          onClickHandler={() => clearAll(setStorage)}
          title="Удалить все заметки"
          imageSrc={clearList}
          imageAlt="close-button-icon"
        />
      </div>
    </>
  );
}

export default NoteInput;
