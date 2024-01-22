import React from "react";
import "./Home.scss";
import Stories from "../../Components/stories/Stories";
import Posts from "../../Components/posts/Posts";

const Home = () => {
  return (
    <div className="homePage">
      <Stories />
      <Posts />
    </div>
  );
};

export default Home;
