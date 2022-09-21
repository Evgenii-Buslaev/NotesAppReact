import { useState } from "react";

import "./App.css";
import "./css/page.css";
import "./css/reset.css";

// components
import Header from "./components/Header";
import MainCont from "./components/MainCont";

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
          storage: notesList,
          setStorage: setNotesList,
          mode: mode,
          setMode: setMode,
          menu: menuOpenned,
          openCloseMenu: setMenuOpenned,
          setSection: setSection,
          search: () =>
            searchNote(inputSearch, notesList, setFoundLists, setInputSearch),
          setFoundList: setFoundLists,
        }}
      >
        <Header />
        <MainCont
          searchList={foundLists}
          section={section}
          value={inputNote}
          changeInput={(e) => changeInput(setInputNote, e.target.value)}
          create={(e) => {
            e.preventDefault();
            createItem(inputNote, notesList, setInputNote, setNotesList);
          }}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
