
import React from 'react';
import { GlobeAltIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
             <GlobeAltIcon className="h-7 w-7 text-cyan-400" />
            <span className="text-xl font-bold text-white tracking-tight">
              Turismo<span className="text-cyan-400">Sintético</span>
            </span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TurismoSintético Inc. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
