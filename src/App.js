import { useState } from "react";

import "./App.css";
import "./css/page.css";
import "./css/reset.css";

// components
import Header from "./components/Header";
import NotesSection from "./components/NotesSection";
import SearchList from "./components/SearchList";

// handlers
import { changeInput, createItem } from "./handlers/note_handlers";
import { saveMode } from "./handlers/mode";
import { saveNotes } from "./handlers/storage";
import { searchNote } from "./handlers/search_handlers";
import { AppContext } from "./handlers/context";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [notesList, setNotesList] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [inputNote, setInputNote] = useState("");
  const [section, setSection] = useState("notes");
  const [menuOpenned, setMenuOpenned] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [foundLists, setFoundLists] = useState([]);

  saveMode(mode);
  saveNotes(notesList);

  return (
    <div className={`App ${mode === "dark" ? "dark" : "light"}`}>
      <AppContext.Provider
        value={{
          value: inputSearch,
          setValue: setInputSearch,
          search: () =>
            searchNote(inputSearch, notesList, setFoundLists, setInputSearch),
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
          closeMenu: setMenuOpenned,
          storage: notesList,
          setStorage: setNotesList,
          mode: mode,
          setSection: setSection,
        }}
      >
        {foundLists.length ? (
          <SearchList list={foundLists} />
        ) : (
          <NotesSection
            section={section}
            value={inputNote}
            changeInput={(e) => changeInput(setInputNote, e.target.value)}
            create={(e) => {
              e.preventDefault();
              createItem(inputNote, notesList, setInputNote, setNotesList);
            }}
          />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
