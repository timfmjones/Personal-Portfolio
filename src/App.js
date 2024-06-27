import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import SkillsPage from './components/Skills';
import Contact from './components/Contact';
import Games from './components/Games';
import SnakeGame from './components/SnakeGame';
import Pacman from './components/Pacman';
import Minesweeper from './components/Minesweeper';
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
          <Route path="/games" element={<Games />} />
          <Route path="/games/snake" element={<SnakeGame />} />
          <Route path="/games/minesweeper" element={<Minesweeper rows={15} cols={12} mines={15} />} />
          <Route path="/games/pacman" element={<Pacman />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
