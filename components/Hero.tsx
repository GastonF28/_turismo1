import React from 'react';

interface HeroProps {
  onDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="Colaborador de IA hiperrealista operando complejos sistemas de reservas de paquetes turísticos en una interfaz holográfica." 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
      />
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <span className="text-cyan-400 font-semibold uppercase tracking-wider">Talento Sintético para Turismo</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-6 leading-tight">
          Revolucione su Agencia con Colaboradores de IA
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
          Nuestro colaborador de IA gestiona el ciclo completo de reservas —vuelos, hoteles y excursiones— 24/7, sin errores y a una fracción del costo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onDemoClick}
            className="bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Solicitar una Demo
          </button>
          <a
            href="#features"
            className="bg-transparent border-2 border-slate-300 text-slate-200 font-semibold px-8 py-3 rounded-lg hover:bg-slate-300 hover:text-slate-800 transition-all duration-300"
          >
            Conocer Más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;