import logo from './logo.svg';
import './App.css';
import Home from './components/home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './actions/posts'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
