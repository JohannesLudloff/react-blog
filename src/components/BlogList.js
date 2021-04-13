import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
	return (
		<div className="blog-list">
			<h2 className="text-muted">{title}</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>{blog.body.substring(0, 150) + " ..."}</p>
						<p className="text-muted">
							{blog.author}, {blog.created && new Date(Date.parse(blog.created)).toLocaleDateString("en-US")}
						</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
