import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  //// npx json-server --watch data/db.json --port 8000
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {/* <BlogList
        blogs={blogs}
        title="All Blogs !!!"
        handleDelete={handleDelete}
      /> */}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
