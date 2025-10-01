import React from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-7xl">
        <a
          href="#about"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer hover:text-indigo-700 dark:hover:text-indigo-300 transition"
          onClick={(e) => handleScroll(e, 'about')}
        >
          Atharva Kanchan
        </a>
        
        <ul className="hidden md:flex space-x-8 items-center">
          {['about', 'skills', 'projects', 'resume', 'contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleScroll(e, id)}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-200"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="ml-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition duration-200"
              aria-label="Toggle Dark Mode"
              title="Toggle Dark Mode"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
