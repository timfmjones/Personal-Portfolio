import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import SkillsPage from './components/Skills';
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTopButton';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Tim Jones'; 
  }, []); 

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
