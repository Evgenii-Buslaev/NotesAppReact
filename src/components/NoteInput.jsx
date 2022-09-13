import confirmIcon from "../icons/note-input/confirm.png";
import closeIcon from "../icons/note-input/close.png";

import classes from "../css/components/NoteInput.module.css";

function NoteInput({ change, add, value }) {
  return (
    <form className={classes.noteInputCont} onSubmit={add}>
      <input
        type="sumbit"
        placeholder="Заметка..."
        onChange={change}
        value={value}
      ></input>
      <button onClick={add}>
        <img src={confirmIcon} alt="confirm-button-icon" />
      </button>
      <button>
        <img src={closeIcon} alt="close-button-icon" />
      </button>
    </form>
  );
}

export default NoteInput;
