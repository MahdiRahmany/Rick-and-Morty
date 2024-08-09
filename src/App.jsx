import { allCharacters } from "../data/data";
import "./App.css";
import Navbar, { SearchResult, Search } from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`
        );

        setCharacters(data.results.slice(0, 5));
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setCharacters([]);
      return;
    }

    fetchData();
  }, [query]);

  const handleSelectCharacter = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="app">
      <Toaster />
      <Navbar>
        <Search query={query} setQuery={setQuery} />

        <SearchResult numOfResult={characters.length} />
      </Navbar>
      <div className="main">
        <Main>
          <CharacterList
            selectedId={selectedId}
            characters={characters}
            isLoading={isLoading}
            onSelectCharacter={handleSelectCharacter}
          />
          <CharacterDetail selectedId={selectedId} />
        </Main>
      </div>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
