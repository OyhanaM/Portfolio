import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-pink">
      <nav className="flex items-center justify-between h-14">
        <Link to="/">
          <img className="w-9" src="/assets/logo/cookielogo.png" alt="logo" />
        </Link>
        <ul className="flex gap-10 text-white font-Raleway">
          <Link to="/portfolio">
            <li className="text-lg text-white font-Raleway">PORTFOLIO</li>
          </Link>
          <Link to="/apropos">
            <li className="text-lg text-white font-Raleway">A PROPOS</li>
          </Link>
          <Link to="/monparcours">
            <li className="text-lg text-white font-Raleway">MON PARCOURS</li>
          </Link>
        </ul>
        <Link to="/contact">
          <button
            type="button"
            className="bg-orange p-2 w-32 rounded-full font-Raleway text-light mr-3"
          >
            Contact me
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
