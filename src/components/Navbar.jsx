import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1></h1>
        <ul>
          <li><Link to="/" className="nav_text">Home</Link></li>
          <li><Link to="/about" className="nav_text">Over mij</Link></li>
          <li><Link to="/project" className="nav_text">Project</Link></li>
          <li><Link to="/contact" className="nav_text">Contact</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
