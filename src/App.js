import { useState } from "react";

import "./App.css";
import "./css/page.css";
import "./css/reset.css";

// components
import Header from "./components/Header";
import NotesSection from "./components/NotesSection";
import SearchList from "./components/SearchList";

// handlers
import {
  changeInput,
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
  // mode
  const [mode, setMode] = useState("light");
  console.log(mode);

  // menu
  const [section, setSection] = useState("notes");

  // notes list states
  const [notesList, setNotesList] = useState([]);
  const [inputNote, setInputNote] = useState("");

  // search state
  const [inputState, setInputState] = useState("");
  const [foundLists, setFoundLists] = useState([]);

  // menu
  function changeSection(sectionName) {
    setSection(sectionName);
  }

  return (
    <div className={`App ${mode === "dark" ? "dark" : "light"}`}>
      <AppContext.Provider
        value={{
          value: inputState,
          setValue: setInputState,
          search: () =>
            searchNote(inputState, notesList, setFoundLists, setInputState),
          setFoundList: setFoundLists,
          mode: mode,
          setMode: setMode,
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
            changeInput={(e) => changeInput(setInputNote, e.target.value)}
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
