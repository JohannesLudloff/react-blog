import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<h1>The Blog</h1>
			</Link>

			<div className="links">
				<Link to="/create">New Entry</Link>
				<Link to="/signup">Sign Up</Link>
			</div>
		</nav>
	);
};

export default Navbar;
