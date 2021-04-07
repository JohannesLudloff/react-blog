import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  // useEffect with empty dependency to only run it on load
  useEffect(() => {
    setTimeout(() => {
      getBlogs().then((data) => setBlogs(data));
      setisLoading(false);
    }, 2000);
  }, []);

  async function getBlogs() {
    const res = await fetch("http://localhost:8000/blogs");
    const AllTheBlogs = await res.json();

    return AllTheBlogs;
  }

  return (
    <div className="home">
      {isLoading && <div className="loading">loading awesomeness... </div>}
      {blogs && <BlogList blogs={blogs} title={"All Articles"} />}
    </div>
  );
};

export default Home;
