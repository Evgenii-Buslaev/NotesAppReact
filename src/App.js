import "./App.css";
import "./css/page.css";
import "./css/reset.css";

import { useState } from "react";

// components
import Header from "./components/Header";
import Menu from "./components/Menu";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
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

/* import { AppContext } from "./handlers/context";

const provider = (
  <AppContext.Provider
    value={{
      search: {
        value: inputState,
        change: setInputState,
        setValue: setInputState,
        setFoundList: setFoundLists,
        search: () =>
          searchNote(inputState, notesList, setFoundLists, setInputState),
        list: foundLists,
      },
      input: {
        value: inputNote,
        change: changeInput,
        create: (e) => {
          e.preventDefault();
          createItem(inputNote, notesList, setInputNote, setNotesList);
        },
        setStorage: setNotesList,
        clearAll: clearStorage,
      },
    }}
  ></AppContext.Provider>
); */

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
      <Header
        setValue={setInputState}
        setFoundList={setFoundLists}
        value={inputState}
        change={setInputState}
        search={() =>
          searchNote(inputState, notesList, setFoundLists, setInputState)
        }
      />
      {foundLists.length ? (
        <SearchList
          list={foundLists}
          edit={editItem}
          move={replaceItem}
          remove={deleteItem}
          storage={notesList}
          setStorage={setNotesList}
        />
      ) : (
        <main>
          <Menu change={changeSection} />
          <div>
            {section === "notes" ? (
              <NoteInput
                setStorage={setNotesList}
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
              clearBin={() => clearSection(notesList, setNotesList)}
            />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
