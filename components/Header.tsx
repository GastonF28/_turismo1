import React from 'react';

interface HeaderProps {
  onDemoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDemoClick }) => {
  return (
    <header className="bg-slate-50/80 backdrop-blur-lg sticky top-0 z-40 border-b border-slate-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://github.com/GastonF28/_turismo1/blob/bf5afbbef7014685476e4390f85d276b49b580df/superpeople3.png" 
              alt="Super People - La evolución del talento" 
              className="h-12 md:h-16 w-auto object-contain" 
            />
          </div>
          <button
            onClick={onDemoClick}
            className="hidden md:inline-block bg-cyan-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;