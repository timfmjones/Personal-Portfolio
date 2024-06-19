import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // function to dynamically apply styles to the active link
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
      borderBottom: isActive ? '2px solid #c1b9a4' : 'none', 
    };
  };

  return (
    <nav className="bg-[#2a2c31] text-white p-5 shadow-md"> 
      <ul className="flex justify-center space-x-10"> 
        <li><NavLink to="/" style={activeStyle}>Home</NavLink></li>
        <li><NavLink to="/about" style={activeStyle}>About</NavLink></li>
        <li><NavLink to="/projects" style={activeStyle}>Projects</NavLink></li>
        <li><NavLink to="/skills" style={activeStyle}>Skills</NavLink></li>
        <li><NavLink to="/contact" style={activeStyle}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
