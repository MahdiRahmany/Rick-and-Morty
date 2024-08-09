import { allCharacters } from "../data/data";
import "./App.css";
import Navbar, { SearchResult, Search, Favorites } from "./components/Navbar";
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
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`,
          { signal }
        );

        setCharacters(data.results.slice(0, 5));
      } catch (error) {
        if (error.name !== "AbortError") {
          toast.error(error.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setCharacters([]);
      return;
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  const handleSelectCharacter = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddFavorite = (char) => {
    setFavorites((prevFav) => [...prevFav, char]);
  };

  const isAddedToFavorites = favorites
    .map((fav) => fav.id)
    .includes(selectedId);

  return (
    <div className="app">
      <Toaster />
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <SearchResult numOfResult={characters.length} />
        <Favorites numOfFavorites={favorites.length} />
      </Navbar>
      <div className="main">
        <Main>
          <CharacterList
            selectedId={selectedId}
            characters={characters}
            isLoading={isLoading}
            onSelectCharacter={handleSelectCharacter}
          />
          <CharacterDetail
            selectedId={selectedId}
            onAddFavorite={handleAddFavorite}
            isAddedToFavorites={isAddedToFavorites}
          />
        </Main>
      </div>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
