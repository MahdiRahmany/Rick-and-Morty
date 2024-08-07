import { allCharacters } from "/data/data.js";
import "./App.css";
import Navbar, {SearchResult} from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  return (
    <div className="app">
      <Navbar>
        <SearchResult numOfResault={characters.length} />
      </Navbar>
      <div className="main">
        <Main>
          <CharacterList characters={characters} />
          <CharacterDetail />
        </Main>
      </div>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
