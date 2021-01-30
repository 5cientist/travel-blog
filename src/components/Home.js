import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  //// npx json-server --watch data/db.json --port 8000
  const [blogs, setBlogs] = useState(null);

  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>loading........</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
