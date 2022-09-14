import classes from "../css/components/NoteInput.module.css";

// icons
import confirmIcon from "../icons/note-input/confirm.png";
import clearList from "../icons/menu/recycle-bin.png";

function NoteInput({ change, create, value, clear }) {
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
        <button onClick={create} title="Создать заметку">
          <img src={confirmIcon} alt="confirm-button-icon" />
        </button>
        <button onClick={clear} title="Удалить все заметки">
          <img src={clearList} alt="close-button-icon" />
        </button>
      </div>
    </>
  );
}

export default NoteInput;
