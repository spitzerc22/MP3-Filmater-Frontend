import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Genres from './Components/Genres';
import Home from './Components/Home';
import Submission from './Components/Submission';
import Login from './Components/Login';
import Register from './Components/Register';
import MovieGallery from './Components/MovieGallery';
import cors from 'cors'

function App() {
  return (
    <div className="App">
      <Router>
        <h1><Link to="/" style={{textDecoration: "none"}}>Filmater</Link></h1>
        
        <NavBar />

        <div className="displayContainer">
          
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/genres" element={<Genres />}></Route>
            <Route path="/genres/:genre" element={<MovieGallery />}></Route>
            <Route path="/submit" element={<Submission />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/login/new" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
