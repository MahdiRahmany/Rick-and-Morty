import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      {children}
      <Favorites />
    </nav>
  );
}

export default Navbar;

function Logo() {
  return <div className="navbar__logo">LOGO ❤</div>;
}

function Search() {
  return <input type="text" className="text-field" placeholder="search ..." />;
}

export function SearchResult({numOfResult}) {
  return <div className="navbar__result">Found {numOfResult} Character</div>;
}

function Favorites() {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">1</span>
    </button>
  );
}
