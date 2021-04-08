import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="text-muted">{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.body.substring(1, 150) + "..."}</p>
            <p className="text-muted">{blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
