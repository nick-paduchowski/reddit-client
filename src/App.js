import logo from './logo.svg';
import './App.css';
import Home from './components/home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
