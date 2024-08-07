import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({numOfResault}) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO ❤</div>
      <input type="text" className="text-field" placeholder="search ..." />
      <div className="navbar__result">Found {numOfResault} Character</div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">1</span>
      </button>
    </nav>
  );
}

export default Navbar;
