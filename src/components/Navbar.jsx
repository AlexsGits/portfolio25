import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="m-4 md:m-8 flex flex-row justify-between items-center w-full opacity-100">
        <h2 className="text-lg font-semibold cursor-pointer">ALEXANDER J.</h2>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <ul className="hidden md:flex flex-row space-x-6 text-base">
          <li className="text-gray-400 hover:text-white cursor-pointer">projects</li>
          <li className="text-gray-400 hover:text-white cursor-pointer">contact</li>
        </ul>
      </nav>
      
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full">
          <ul className="flex flex-col items-center py-4 space-y-4 bg-gray-800">
            <li className="text-gray-400 hover:text-white cursor-pointer">projects</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">contact</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;