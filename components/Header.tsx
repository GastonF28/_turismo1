import React from 'react';
import { GlobeAltIcon } from './icons';

interface HeaderProps {
  onDemoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDemoClick }) => {
  return (
    <header className="bg-slate-50/80 backdrop-blur-lg sticky top-0 z-40 border-b border-slate-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GlobeAltIcon className="h-8 w-8 text-cyan-500" />
            <span className="text-2xl font-bold text-slate-800 tracking-tight">
              Turismo<span className="text-cyan-500">Sintético</span>
            </span>
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