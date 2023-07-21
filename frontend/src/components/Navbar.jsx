import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-pink">
      <nav className="flex items-center justify-between h-12">
        <Link to="/">
          <img
            className="w-10 ml-6"
            src="/assets/favicon/favicon.png"
            alt="logo"
          />
        </Link>
        <ul className="flex gap-10 text-white font-Raleway">
          <Link to="/portfolio">
            <li className="text-lg text-white font-Raleway">PORTFOLIO</li>
          </Link>

          <Link to="/resume">
            <li className="text-lg text-white font-Raleway">MON PARCOURS</li>
          </Link>
          <Link to="/about">
            <li className="text-lg text-white font-Raleway">ET SI?</li>
          </Link>
        </ul>
        <Link to="/contact">
          <button type="button" className="buttonNavBar font-Raleway mr-6">
            Me contacter
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
