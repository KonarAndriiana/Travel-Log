import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PlaceDetail from './pages/PlaceDetail';
import About from './pages/About';
import AddPlace from './pages/AddPlace';
import EditPlace from './pages/EditPlace';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



function App() {
  return (
  <Router>
  <div className="app-container">
    <Navbar />
    <main className="content">
                <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add" element={<AddPlace />} />
            <Route path="/edit/:id" element={<EditPlace />} />
            <Route path="/place/:id" element={<PlaceDetail />} />
          </Routes>
    </main>
    <Footer />
  </div>
  </Router>
  );
}


export default App;
