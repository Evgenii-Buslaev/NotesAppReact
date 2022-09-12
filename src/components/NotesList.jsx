import styles from "../css/components/NotesList.module.css";
import NoteInput from "./NoteInput";
import classes from "../css/components/NoteInput.module.css";

function NotesList() {
  return (
    <div className={styles.notesCont}>
      <NoteInput className={classes.noteInputCont} />
    </div>
  );
}

export default NotesList;
