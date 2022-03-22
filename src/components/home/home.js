import React from "react";
import "./home.css";
import reddit from "../../assets/reddit.png";
import search from "../../assets/search.png";
import Subreddit from "../subreddits/subreddit";
import Posts from "../posts/posts";

const Home = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-items">
          <div className="branding">
            <img src={reddit} className="icon" />
            <h1 className="main-name">&nbsp;&nbsp;Reddit</h1>
            <h1>Client</h1>
          </div>
          <div className="search-form">
            <form class="example" action="action_page.php">
              <input
                className="search"
                type="text"
                placeholder="Search for a specific term!"
                name="search"
              />
              <button type="submit">
                <img className="search-icon" src={search} />
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="main-content">
        <div className='posts'>
            <Posts />
        </div>
        <div className='subreddit'>
            <Subreddit />
        </div>
      </div>
    </>
  );
};

export default Home;
