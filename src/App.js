import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Genres from './Components/Genres';
import Home from './Components/Home';
import Submission from './Components/Submission';
import Login from './Components/Login';

function App() {

  return (
    <div className="App">
      <Router>
        <h1>Filmater</h1>
        
        <NavBar />

        <div className="displayContainer">
          
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/genres" element={<Genres />}></Route>
            <Route path="/submit" element={<Submission />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
        

      
    </div>
  );
}

export default App;