import React, { useState, useEffect } from 'react';
import KeyProjects from './KeyProjects';
import Skills from './Skills';
import resume from './assets/tim-jones-resume-2024.pdf';
import HologramEffect from './Hologram';
import './Home.css';


const Home = () => {

  const [bgColor, setBgColor] = useState('bg-[#A4acc1]'); // Initial background color

  // Function to change the background color
  const changeBackgroundColor = () => {
    const newColor = bgColor === 'bg-[#2a2c31]' ? 'bg-[#031407]' : 'bg-[#2a2c31]'; // Toggle between two colors for demonstration
    setBgColor(newColor);
  };

  useEffect(() => {
    const container = document.getElementById('waterDropEffectContainer');
    const createDrop = () => {
      const drop = document.createElement('div');
      drop.classList.add('water-drop');
      drop.style.left = `${Math.random() * 100}%`; // Random position across the container width

      container.appendChild(drop);

      setTimeout(() => {
        drop.remove(); // Remove the drop after animation to clean up the DOM
      }, 1000); // Match the animation duration
    };

    const intervalId = setInterval(createDrop, 200); // Create a new drop every 200 milliseconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);



  return (
    <div>
      {/* Hero Section */}
      <section className={`${bgColor} hero-section text-white text-center py-20 lg:py-32 relative overflow-hidden`}>

      <div className={`${bgColor} hero-section text-white py-20 lg:py-32 relative overflow-hidden`}>
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <div className="w-full mb-8 h-32">
            < HologramEffect />
          </div>

          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold mt-6">Hello, I'm Tim Jones</h1>
            <p className="text-xl lg:text-2xl mt-4">Software Developer | Engineer | Tech Enthusiast</p>
            <div className="flex justify-center items-center space-x-4 mt-4" style={{ zIndex: 999 }}>
            <a href={resume} download="tim-jones-resume.pdf" className="bg-[#5c606c] hover:bg-[#141417] text-white font-bold py-2 px-4 rounded"  style={{ zIndex: 999 }}>
              Download Resume
            </a>
            <a href="https://www.linkedin.com/in/timothy-jones-647930178/" target="_blank" rel="noopener noreferrer" className="bg-[#5c606c] hover:bg-[#141417] text-white font-bold py-2 px-4 rounded" style={{ zIndex: 999 }}>
              LinkedIn
            </a>
            <a href="https://github.com/timfmjones" target="_blank" rel="noopener noreferrer" className="bg-[#5c606c] hover:bg-[#141417] text-white font-bold py-2 px-4 rounded" style={{ zIndex: 999 }}>
              GitHub
            </a>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4" style={{ zIndex: 999 }}>
              <a href="/Personal-Portfolio/contact" className="mt-8 inline-block bg-white text-[#141417] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"  style={{ zIndex: 999 }}>
                Contact me
              </a>
            </div>
          </div>
        </div>
        <div className="water-drop-effect-container" id="waterDropEffectContainer"></div>
      </div>

      </section>

      {/* Projects Section */}
      <section id="projects"></section>
      <KeyProjects />

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default Home;
