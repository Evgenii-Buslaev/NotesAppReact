import Menu from "../components/Menu";
import NoteInput from "../components/NoteInput";
import NotesList from "../components/NotesList";

function NotesSection({ section, value, changeInput, create }) {
  return (
    <main>
      <Menu />
      <div>
        {section === "notes" ? (
          <NoteInput value={value} change={changeInput} create={create} />
        ) : null}
        <NotesList section={section} />
      </div>
    </main>
  );
}

export default NotesSection;
