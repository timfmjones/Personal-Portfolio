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
        <li><NavLink to="/Personal-Portfolio//" style={activeStyle}>Home</NavLink></li>
        <li><NavLink to="/Personal-Portfolio//about" style={activeStyle}>About</NavLink></li>
        <li><NavLink to="/Personal-Portfolio//projects" style={activeStyle}>Projects</NavLink></li>
        <li><NavLink to="/Personal-Portfolio//skills" style={activeStyle}>Skills</NavLink></li>
        <li><NavLink to="/Personal-Portfolio//games" style={activeStyle}>Games</NavLink></li>
        <li><NavLink to="/Personal-Portfolio//contact" style={activeStyle}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
