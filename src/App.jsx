import { allCharacters } from "../data/data";
import "./App.css";
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList characters={allCharacters} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
