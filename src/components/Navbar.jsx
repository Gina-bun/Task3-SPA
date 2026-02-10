import { Link } from "react-router-dom";
import { ThemeToggle } from "../Theme/ThemeToggle";
import "./Navbar.css";

export function Navbar({ theme, toggleTheme }) {
  return (
    <>
      <nav className={`bg-[#f27059] flex justify-between items-center ${theme === "dark" ? "darkmode" : ""}`}>
        <img className="logo -my-[1em]" src="/src/assets/logo.png" alt="" />
        <div className="flex">
          {/* for mobile */}
          <div className="flex gap-5 navlinks items-center">
            <Link className="nav-link" to="/">
              🏠︎
            </Link>
            <Link className="nav-link" to="/about">
              🛈
            </Link>
            <Link className="nav-link" to="/contact">
              ☏
            </Link>
       
          </div>

          {/* for tablet & desktop */}
          <div className="navlinks navlinks-lg hidden gap-7.5 items-center">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </div>

               <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </>
  );
}
