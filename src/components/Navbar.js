import { Link } from "react-router-dom";
import { BoxArrowInRight, PlusSquare } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>DEV</h1>
      </Link>

      <div className="links">
        <Link to="/create">
          <PlusSquare size={20} color="grey" />
        </Link>
        <Link to="/signup">
          <BoxArrowInRight size={25} color="grey" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
