import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";

const Blogpost = () => {
	const { id } = useParams();
	const { data: blog, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);
	const history = useHistory();

	function handleClick(e) {
		const options = {
			method: "DELETE",
		};
		fetch("http://localhost:8000/blogs/" + id, options).then(() => {
			console.log("deleted");
			history.push("/");
		});
	}

	return (
		<div className="blog-post">
			{isLoading && <div>loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleClick}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default Blogpost;
