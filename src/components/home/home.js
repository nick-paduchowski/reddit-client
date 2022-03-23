import React, { useEffect, useState } from "react";
import "./home.css";
import reddit from "../../assets/reddit.png";
import Subreddit from "../subreddits/subreddit";
import Posts from "../posts/posts";
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/posts'
import { BiSearch } from 'react-icons/bi'

const Home = () => {
  const [postData, setPostData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [reloadData, setReloadData ] = useState(false)
  let searchPostData = []
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
        console.log(postData)
    }, [dispatch, searchPostData])

    let posts = useSelector((state) => state.posts)

    if (searchQuery == "" && postData == []){
        setPostData(posts)
        setReloadData(true)
    }

    const handleSearchChange = event => {
        setSearchQuery(event.target.value)
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        searchPostData = posts = posts.filter((post) => post.data.title.toLowerCase().includes(searchQuery.toLowerCase()))
        setPostData(searchPostData);
        setReloadData(false)
    }

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
            <form onSubmit={handleSubmit}>
              <input
                className="search"
                type="text"
                placeholder="Search for a specific term!"
                name="searchQuery"
                onChange={handleSearchChange}
              />
              <button type="submit" onClick={handleSubmit}>
                <BiSearch />
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="main-content">
        <div className='posts'>
            <Posts posts={postData}/>
        </div>
        <div className='subreddit'>
            <Subreddit />
        </div>
      </div>
    </>
  );
};

export default Home;
