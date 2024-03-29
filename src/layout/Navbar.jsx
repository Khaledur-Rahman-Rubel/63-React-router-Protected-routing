import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="addBlog" className="nav-link">
        Add Blog
      </Link>
      <Link to="about" className="nav-link">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
