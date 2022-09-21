import { useContext } from "react";

import ImageButton from "..//UI/ImageButton";
import { clearStorage } from "../handlers/note_handlers";
import { AppContext } from "../handlers/context";

import confirmIcon from "../icons/note-input/confirm.png";
import clearList from "../icons/menu/recycle-bin.png";

import classes from "../css/components/NoteInput.module.css";

function NoteInput({ change, create, value }) {
  const { appStorage } = useContext(AppContext);
  const { setStorage } = appStorage;
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
          onClickHandler={() => clearStorage(setStorage)}
          title="Удалить все заметки"
          imageSrc={clearList}
          imageAlt="close-button-icon"
        />
      </div>
    </>
  );
}

export default NoteInput;
