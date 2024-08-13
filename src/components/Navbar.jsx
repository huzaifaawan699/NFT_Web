import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo4.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-transform duration-500 ${isScrolled ? 'bg-opacity-70 bg-black' : 'bg-opacity-20 bg-black'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-white hover:text-black">
              Home
            </a>
            <a href="#downloads" className="text-white hover:text-black">
              Downloads
            </a>
            <a href="#about" className="text-white hover:text-black">
              About
            </a>
            <a href="#support" className="text-white hover:text-black">
              Support
            </a>
            <button className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white-800 focus:outline-none">
              {isOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-500 ease-in-out bg-white shadow-lg z-50`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Close Button */}
          <div className="flex items-center justify-between">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <RiCloseLine size={30} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="mt-4 space-y-4">
            <a
              href="#home"
              className="block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#downloads"
              className="block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
              onClick={toggleMenu}
            >
              Downloads
            </a>
            <a
              href="#about"
              className="block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#support"
              className="block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
              onClick={toggleMenu}
            >
              Support
            </a>
          </nav>

          {/* Mobile Buy Now Button */}
          <div className="mt-auto">
            <button className="w-full bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
