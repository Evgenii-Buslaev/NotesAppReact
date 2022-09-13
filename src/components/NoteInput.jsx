import confirmIcon from "../icons/note-input/confirm.png";
import closeIcon from "../icons/note-input/close.png";

import classes from "../css/components/NoteInput.module.css";

function NoteInput({ change }) {
  return (
    <div className={classes.noteInputCont}>
      <input type="sumbit" placeholder="Заметка..." onChange={change}></input>
      <button>
        <img src={confirmIcon} alt="confirm-button-icon" />
      </button>
      <button>
        <img src={closeIcon} alt="close-button-icon" />
      </button>
    </div>
  );
}

export default NoteInput;
