import { allCharacters } from "../data/data";
import "./App.css";
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import CharacterItem from "./components/CharacterItem";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList characters={allCharacters} />
        <CharacterItem />
      </div>
    </div>
  );
}

export default App;
