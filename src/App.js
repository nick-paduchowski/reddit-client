import './App.css';
import Home from './components/home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './actions/posts'

function App() {

  const dispatch = useDispatch();

  dispatch(getPosts())

  const posts = useSelector(state => state.posts);

  console.log(posts)

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Home posts={posts}/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
