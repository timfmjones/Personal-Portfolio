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
          <Route path="/Personal-Portfolio/" element={<Home />} />
          <Route path="/Personal-Portfolio/about" element={<About />} />
          <Route path="/Personal-Portfolio/projects" element={<Projects />} />
          <Route path="/Personal-Portfolio/skills" element={<SkillsPage />} />
          <Route path="/Personal-Portfolio/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/Personal-Portfolio/" />} />
        </Routes>
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
