import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blogpost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import { Container } from "react-bootstrap";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	function handleError(v) {
		console.log(v);
	}
	return (
		<AuthProvider>
			<Router>
				<div className="App">
					<Container>
						<Navbar passToParent={handleError} />
						<div className="content">
							<Switch>
								<Route exact path="/" component={Home} />
								<PrivateRoute exact path="/profile" component={Profile} />
								<Route path="/create" component={Create} />
								<Route path="/signup" component={SignUp} />
								<Route path="/login" component={Login} />
								<Route path="/forgotpassword" component={ForgotPassword} />
								<Route path="/blogs/:id" component={Blogpost} />
								{/* catch all route */}
								<Route path="*" component={NotFound} />
							</Switch>
						</div>
					</Container>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
