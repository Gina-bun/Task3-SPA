import { Link } from "react-router-dom";
import { ThemeToggle } from "../Theme/ThemeToggle";

export function Navbar({theme, toggleTheme}) {
  return (
    <>
      <nav className="bg-red-300 flex justify-between items-center px-2.5">
        <h1>LOGO</h1>
        <div className="navlinks flex gap-7.5">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
        </div>
      </nav>
    </>
  );
}
