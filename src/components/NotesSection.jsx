import Menu from "../components/Menu";
import NoteInput from "../components/NoteInput";
import NotesList from "../components/NotesList";

function NotesSection({
  section,
  value,
  changeSection,
  changeInput,
  storage,
  create,
  setStorage,
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
            setStorage={setStorage}
            clearAll={clearAll}
          />
        ) : null}
        <NotesList storage={storage} section={section} clearBin={clearBin} />
      </div>
    </main>
  );
}

export default NotesSection;
