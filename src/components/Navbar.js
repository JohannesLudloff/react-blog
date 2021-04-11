import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BoxArrowInRight, PlusSquare } from "react-bootstrap-icons";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "react-bootstrap";

const Navbar = ({ passToParent }) => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch (err) {
      setError("Failed to log you out" + err.message);
      passToParent(error);
    }
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>DEV</h1>
      </Link>

      <div className="links">
        {currentUser && currentUser.email}
        {currentUser && (
          <Link to="/create">
            <PlusSquare size={20} color="grey" />
          </Link>
        )}
        {currentUser && (
          <Button variant="link" onClick={handleLogout}>
            <BoxArrowInRight size={25} color="grey" />
          </Button>
        )}
        {!currentUser && <Link to="/signup">Sign In</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
