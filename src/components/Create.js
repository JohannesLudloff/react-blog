import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Martin");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();
		setIsPending(true);
		const blog = { title, body, author };
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
			<h2>Add a new article</h2>
			<form onSubmit={handleSubmit}>
				<label>Titel:</label>
				<input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
				<label>Inhalt:</label>
				<textarea required value={body} onChange={(e) => setBody(e.target.value)} />
				<label>Author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="Johannes">Johannes</option>
					<option value="Martin">Martin</option>
					<option value="Georg">Georg</option>
				</select>
				{!isPending && <button> Add Post</button>}
				{isPending && <button disabled> Adding Post</button>}
			</form>
		</div>
	);
};

export default Create;
