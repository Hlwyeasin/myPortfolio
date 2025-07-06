import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="bg-purple-600 text-white p-[10px] py-[20px] md:fixed w-full z-9999 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* First div: Name */}
        <div className="text-4xl font-bold cursor-pointer hover:text-red-300 md:font-bold">Yeasin <span className='text-amber-400  cursor-pointer hover:text-amber-300'>Chowdhury</span></div>



        {/* Second div: Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a href={`#${link.toLowerCase()}`} key={link} className="hover:text-gray-900 md:text-3xl md:hover:text-green-600 md:font-bold">
              {link}
            </a>
          ))}
        </div>

        {/* Third div: Hamburger and Close Buttons */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="block text-lg text-white hover:text-gray-900">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;