import { useRef, useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErr("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Please check your inbox");
    } catch {
      setErr("Sorry! Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <Container className="mt-3 mw-50" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {err && <Alert variant="danger">{err}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required autoComplete="off"></Form.Control>
            </Form.Group>
            <Button type="submit" disabled={loading} className="w-100">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to={"/login"}>Log In</Link>
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

export default ForgotPassword;
