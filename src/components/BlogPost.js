import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";
import { Trash } from "react-bootstrap-icons";

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
          <div className="float-right">
            <Trash onClick={handleClick} color="grey" size={18} cursor="pointer" />
          </div>
        </article>
      )}
    </div>
  );
};

export default Blogpost;
