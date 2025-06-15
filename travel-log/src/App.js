import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PlaceDetail from './pages/PlaceDetail';
import About from './pages/About';
import AddPlace from './pages/AddPlace';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/add">Add New Place</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<AddPlace />} />

      </Routes>
    </Router>
  );
}

export default App;
