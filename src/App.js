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
  const [notesList, setNotesList] = useState([
    { text: "1", id: uuidv4(), section: "notes" },
    { text: "2", id: uuidv4(), section: "collection" },
  ]);
  const [inputNote, setInputNote] = useState("");

  const [section, setSection] = useState("notes");

  // notes methods

  function createNote(e) {
    e.preventDefault();
    setNotesList([
      ...notesList,
      { text: inputNote, id: uuidv4(), section: "notes" },
    ]);
    setInputNote("");
    console.log(notesList);
  }

  function editNote(id) {
    let changedNote = notesList.filter((elem) => elem.id === id);
    console.log(changedNote);
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
          <NoteInput
            value={inputNote}
            change={changeInput}
            create={createNote}
          />
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
