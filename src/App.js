import "./App.css";
import "./css/page.css";
import "./css/reset.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Menu from "./components/Menu";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";

function App() {
  const [notesList, setNotesList] = useState([]);
  const [inputNote, setInputNote] = useState("");
  const [section, setSection] = useState("notes");

  // notes methods
  function createNote(e) {
    if (!inputNote.length) {
      alert("Заметка не может быть пустой");
      return;
    }
    e.preventDefault();
    setNotesList([
      ...notesList,
      {
        text: inputNote,
        id: uuidv4(),
        section: "notes",
      },
    ]);
    setInputNote("");
  }

  function editNote(id, text) {
    const changedArray = notesList.filter((elem) => elem.id !== id);
    const editingNote = notesList.filter((elem) => elem.id === id)[0];
    editingNote.text = text;
    setNotesList([editingNote, ...changedArray]);
  }

  function moveToAnotherSection(id, sectionName) {
    const changedArray = notesList.filter((elem) => elem.id !== id);
    const changedNote = notesList.filter((elem) => elem.id === id)[0];

    if (changedNote.section === sectionName) {
      return;
    }

    changedNote.section = sectionName;
    setNotesList([...changedArray, changedNote]);
  }

  function deleteNote(id) {
    setNotesList(notesList.filter((elem) => elem.id !== id));
  }

  function clearNoteList() {
    setNotesList([]);
  }

  // menu methods
  function changeInput(e) {
    setInputNote(e.target.value);
  }

  function changeSection(sectionName) {
    setSection(sectionName);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Menu change={changeSection} />
        <div>
          {section === "notes" ? (
            <NoteInput
              value={inputNote}
              change={changeInput}
              create={createNote}
              clear={clearNoteList}
            />
          ) : null}
          <NotesList
            storage={notesList}
            section={section}
            edit={editNote}
            move={moveToAnotherSection}
            remove={deleteNote}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
