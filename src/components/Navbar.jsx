import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="NavBar">
        <h1>Yassir</h1>
        <ul className="nav-links">
          <li><Link to="/"><p>Home</p></Link></li>
          <li><Link to="/about" ><p>Over mij</p></Link></li>
          <li><Link to="/project" ><p>Project</p></Link></li>
          <li><Link to="/contact" ><p>Contact</p></Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
