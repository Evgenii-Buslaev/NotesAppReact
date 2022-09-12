import "./App.css";
import "./css/page.css";
import "./css/reset.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import NotesList from "./components/NotesList";
import NoteInput from "./components/NoteInput";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
        <NotesList>
          <NoteInput />
        </NotesList>
      </main>
    </div>
  );
}

export default App;
