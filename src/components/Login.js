import { useRef, useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErr("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setErr("Sorry! We couldn't sign you in");
    }
    setLoading(false);
  }

  return (
    <Container className="mt-3 mw-50" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {err && <Alert variant="danger">{err}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required autoComplete="off"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required autoComplete="off"></Form.Control>
            </Form.Group>
            <Button type="submit" disabled={loading} className="w-100">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to={"/forgotpassword"}>Forgot your password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <span> Need an account? </span>
        <Link to={"/signup"}>Sign Up</Link>
      </div>
    </Container>
  );
};

export default Login;
