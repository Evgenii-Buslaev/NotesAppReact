import "./App.css";
import "./css/page.css";
import "./css/reset.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
        <NotesList />
      </main>
    </div>
  );
}

export default App;
