import React from 'react';

interface FinalCTAProps {
  onDemoClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onDemoClick }) => {
  return (
    <section id="contacto" className="bg-cyan-600">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ¿Listo para llevar su agencia al siguiente nivel?
          </h2>
          <p className="text-lg text-cyan-100 mb-8">
            Descubra en una demostración personalizada cómo nuestro colaborador de IA puede integrarse en sus operaciones y empezar a generar valor desde el primer día.
          </p>
          <button
            onClick={onDemoClick}
            className="bg-white text-cyan-600 font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 text-lg inline-block"
          >
            Solicitar una Demostración Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;