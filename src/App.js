import Navbar from "./components/Navbar";
import Home from "./Home";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blogpost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/blogs/:id">
                <Blogpost />
              </Route>
              {/* catch all route */}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
