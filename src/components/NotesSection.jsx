import Menu from "../components/Menu";
import NoteInput from "../components/NoteInput";
import NotesList from "../components/NotesList";

function NotesSection({
  section,
  value,
  changeSection,
  changeInput,
  create,
  clearAll,
  clearBin,
}) {
  return (
    <main>
      <Menu change={changeSection} />
      <div>
        {section === "notes" ? (
          <NoteInput
            value={value}
            change={changeInput}
            create={create}
            clearAll={clearAll}
          />
        ) : null}
        <NotesList section={section} clearBin={clearBin} />
      </div>
    </main>
  );
}

export default NotesSection;
