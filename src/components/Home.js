import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div className="loading">loading awesomeness... </div>}
      {blogs && <BlogList blogs={blogs} title={"All Articles"} />}
    </div>
  );
};

export default Home;
