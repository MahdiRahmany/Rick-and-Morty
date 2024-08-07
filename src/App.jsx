import { allCharacters } from "/data/data.js";
import "./App.css";
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  return (
    <div className="app">
      <Navbar numOfResault={characters.length} />
      <div className="main">
        <CharacterList characters={characters} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
