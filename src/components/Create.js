import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Martin");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();
		setIsPending(true);
		const blog = { title, body, author, created: new Date() };
		// save data here
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(blog),
		};
		fetch("http://localhost:8000/blogs", options).then(() => {
			console.log("upload complete");
			setIsPending(false);
			history.push("/");
		});
	}

	return (
		<div className="create">
			<Card className="mt-3">
				<Card.Body>
					<h2>Add a new article</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label>Titel:</Form.Label>
							<Form.Control type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Inhalt:</Form.Label>
							<Form.Control as="textarea" required value={body} onChange={(e) => setBody(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Author:</Form.Label>
							<Form.Control as="select" value={author} onChange={(e) => setAuthor(e.target.value)}>
								<option value="Johannes">Johannes</option>
								<option value="Martin">Martin</option>
								<option value="Georg">Georg</option>
							</Form.Control>
						</Form.Group>
						{!isPending && (
							<Button type="submit" className="w-100">
								Add Post
							</Button>
						)}
						{isPending && (
							<Button disabled className="w-100">
								Adding Post
							</Button>
						)}
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Create;
