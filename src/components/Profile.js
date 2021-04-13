import { useRef, useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";

const Profile = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updateEmail, updatePassword } = useAuth();
	const [err, setErr] = useState();
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setErr("Passwords do not match");
		}

		const promises = [];
		setLoading(true);
		setErr("");

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				history.push("/");
			})
			.catch((err) => {
				setErr("Failed to update account" + err.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<Container className="mt-3 mw-50" style={{ maxWidth: "400px" }}>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Update Profile</h2>
					{err && <Alert variant="danger">{err}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required autoComplete="off" defaultValue={currentUser.email}></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} autoComplete="off" placeholder="leave blank to keep the same"></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control
								type="password"
								ref={passwordConfirmRef}
								autoComplete="off"
								placeholder="leave blank to keep the same"
							></Form.Control>
						</Form.Group>
						<Button type="submit" disabled={loading} className="w-100">
							Update
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				<Link to={"/"}>Cancel</Link>
			</div>
		</Container>
	);
};

export default Profile;
