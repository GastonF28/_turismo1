
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
             <img 
              src="https://raw.githubusercontent.com/GastonF28/_turismo1/main/superpeople3-removebg-preview.png" 
              alt="Super People" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Super People. Todos los derechos reservados.
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
