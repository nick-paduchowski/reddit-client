import React, { useState } from "react";
import posts from "../../../reducers/posts";
import "./post.css";
import upvote from "../../../assets/upvote.png";
import downvote from "../../../assets/downvote.png";

import { BiUpvote, BiDownvote } from "react-icons/bi";

const Post = ({ post }) => {
  const upvoted = false;
  const [btnState, setBtnState] = useState("");
  const [postLikes, setPostLikes] = useState(post.ups)

  const handleUpvote = () => {
    if (btnState === "clicked") {
      setBtnState("")
      setPostLikes((prev) => prev - 1)
      post.ups - 1
    } else {
      setBtnState("clicked")
      setPostLikes((prev) => prev + 1)
    }
  };

  return (
    <>
      <div className="post-div" style={{ display: "flex", marginLeft: "3rem" }}>
        <div className="upvotes">
          {btnState === "clicked" ? (
            <BiUpvote
              className="vote"
              onClick={() => handleUpvote()}
              style={{
                color: "lightgreen",
                width: "2rem",
                marginLeft: "0.5rem",
              }}
            />
          ) : (
            <BiUpvote
              className="vote"
              onClick={() => handleUpvote()}
              style={{ width: "2rem", marginLeft: "0.5rem" }}
            />
          )}
          <p>{postLikes}</p>
          <BiDownvote style={{ width: "2rem", marginLeft: "0.5rem" }} />
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
