import "./App.css";
import "./css/page.css";
import "./css/reset.css";

import { useState } from "react";

// components
import Header from "./components/Header";
import NotesSection from "./components/NotesSection";
import SearchList from "./components/SearchList";

// handlers
import {
  createItem,
  editItem,
  replaceItem,
  deleteItem,
  clearSection,
  clearStorage,
} from "./handlers/note_handlers";

import { searchNote } from "./handlers/search_handlers";
import { AppContext } from "./handlers/context";

function App() {
  // menu
  const [section, setSection] = useState("notes");

  // notes list states
  const [notesList, setNotesList] = useState([]);
  const [inputNote, setInputNote] = useState("");

  // search state
  const [inputState, setInputState] = useState("");
  const [foundLists, setFoundLists] = useState([]);

  // menu methods
  function changeInput(e) {
    setInputNote(e.target.value);
  }

  function changeSection(sectionName) {
    setSection(sectionName);
  }

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          value: inputState,
          setValue: setInputState,
          search: () =>
            searchNote(inputState, notesList, setFoundLists, setInputState),
          setFoundList: setFoundLists,
        }}
      >
        <Header />
      </AppContext.Provider>
      <AppContext.Provider
        value={{
          storage: notesList,
          setStorage: setNotesList,
          edit: editItem,
          move: replaceItem,
          remove: deleteItem,
        }}
      >
        {foundLists.length ? (
          <SearchList list={foundLists} />
        ) : (
          <NotesSection
            section={section}
            value={inputNote}
            changeSection={changeSection}
            changeInput={changeInput}
            storage={notesList}
            create={(e) => {
              e.preventDefault();
              createItem(inputNote, notesList, setInputNote, setNotesList);
            }}
            setStorage={setNotesList}
            clearAll={clearStorage}
            clearBin={() => clearSection(notesList, setNotesList)}
          />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
