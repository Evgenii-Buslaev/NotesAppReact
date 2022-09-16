import "./App.css";
import "./css/page.css";
import "./css/reset.css";

import { useState } from "react";

// components
import Header from "./components/Header";
import Menu from "./components/Menu";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";

// handlers

import {
  createItem,
  editItem,
  replaceItem,
  deleteItem,
  clearSection,
  clearStorage,
} from "./handlers/note_handlers";

function App() {
  const [notesList, setNotesList] = useState([]);
  const [inputNote, setInputNote] = useState("");
  const [section, setSection] = useState("notes");

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
              create={(e) => {
                e.preventDefault();
                createItem(inputNote, notesList, setInputNote, setNotesList);
              }}
              clearAll={clearStorage}
            />
          ) : null}
          <NotesList
            storage={notesList}
            setStorage={setNotesList}
            section={section}
            edit={editItem}
            move={replaceItem}
            remove={deleteItem}
            clearBin={clearSection}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
