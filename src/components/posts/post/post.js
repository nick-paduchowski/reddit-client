import React from "react";
import posts from "../../../reducers/posts";
import "./post.css";
import upvote from "../../../assets/upvote.png";
import downvote from "../../../assets/downvote.png";

const Post = ({ post }) => {
  return (
    <>
      <div className="post-div" style={{ display: "flex", marginLeft: "3rem" }}>
        <div className="upvotes">
          <img
            src={upvote}
            style={{ width: "1.25rem", marginLeft: "0.5rem" }}
          />
          <p>{post.ups}</p>
          <img
            src={downvote}
            style={{ width: "1.25rem", marginLeft: "0.5rem" }}
          />
        </div>
        <div
          className="content"
          style={{ display: "block", marginLeft: "1rem" }}
        >
          <h3>{post.title}</h3>
          <img
            src={post.url_overridden_by_dest}
            style={{ marginBottom: "1rem", width: "95%" }}
          />
          <div className="footer">
            <h5>u/{post.author}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
