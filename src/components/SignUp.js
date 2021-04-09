import { useRef } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useAuth, AuthProvider } from "../contexts/AuthContext";

const SignUp = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signUp } = useAuth();

	function handleSubmit(e) {
		e.preventDefault();

		signUp(emailRef.current.value, passwordRef.current.value);
	}

	return (
		<AuthProvider>
			<Container className="mt-3 mw-50" style={{ maxWidth: "500px" }}>
				<Card>
					<Card.Body>
						<h2 className="text-center mb-4">Sign Up</h2>
						<Form>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" ref={emailRef} required autoComplete="off"></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" ref={passwordRef} required autoComplete="off"></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Password Confirmation</Form.Label>
								<Form.Control type="password" ref={passwordConfirmRef} required autoComplete="off"></Form.Control>
							</Form.Group>
							<Button onClick="handleSubmit" className="w-100">
								Sign Up
							</Button>
						</Form>
					</Card.Body>
				</Card>
				<div className="w-100 text-center mt-2">Already have an account? Log In</div>
			</Container>
		</AuthProvider>
	);
};

export default SignUp;
