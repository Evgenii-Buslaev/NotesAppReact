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
  const [mode, setMode] = useState("light");
  const [section, setSection] = useState("notes");
  const [menuOpenned, setMenuOpenned] = useState(false);
  const [notesList, setNotesList] = useState([]);
  const [inputNote, setInputNote] = useState("");

  // search state
  const [inputState, setInputState] = useState("");
  const [foundLists, setFoundLists] = useState([]);

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
          menu: menuOpenned,
          openMenu: setMenuOpenned,
        }}
      >
        <Header />
      </AppContext.Provider>

      <AppContext.Provider
        value={{
          menu: menuOpenned,
          storage: notesList,
          setStorage: setNotesList,
          edit: editItem,
          move: replaceItem,
          remove: deleteItem,
          mode: mode,
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
            create={(e) => {
              e.preventDefault();
              createItem(inputNote, notesList, setInputNote, setNotesList);
            }}
            clearAll={clearStorage}
            clearBin={() => clearSection(notesList, setNotesList)}
          />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
