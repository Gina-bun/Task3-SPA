import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="bg-red-300 flex justify-between items-center px-2.5">
        <h1>LOGO</h1>
        <div className="navlinks flex gap-7.5">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </>
  );
}
