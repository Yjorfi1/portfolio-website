import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="NavBar">
        <h1>Yassir</h1>
        <ul className="nav-links">
          <li><Link to="/"><p className="nav-link active">Home</p></Link></li>
          <li><Link to="/about" ><p className="nav-link active">Over mij</p></Link></li>
          <li><Link to="/project" ><p className="nav-link active">Project</p></Link></li>
          <li><Link to="/contact" ><p className="nav-link active">Contact</p></Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
