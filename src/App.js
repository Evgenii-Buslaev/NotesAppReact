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

  function createNote(e) {
    e.preventDefault();
    setNotesList([...notesList, { text: inputNote, id: uuidv4() }]);
    setInputNote("");
  }

  function changeInput(e) {
    setInputNote(e.target.value);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
        <div>
          <NoteInput
            value={inputNote}
            change={changeInput}
            create={createNote}
          />
          <NotesList storage={notesList} />
        </div>
      </main>
    </div>
  );
}

export default App;
