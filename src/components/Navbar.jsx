import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/aj.png'; // Updated path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900 text-white p-4 absolute top-16 left-0 w-full z-40 transition-all duration-300 ease-in-out`}>
        <ul className="space-y-4">
          <li><a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>Home</a></li>
          <li><a href="#projects" className="hover:text-gray-400" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-400" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
