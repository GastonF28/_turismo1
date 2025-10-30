
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Recepción de la Solicitud',
      description: 'El cliente realiza su petición de viaje a través de su canal preferido (chat, email, voz).',
    },
    {
      number: '02',
      title: 'Análisis y Planificación IA',
      description: 'El colaborador sintético comprende la solicitud, analiza las variables y busca en tiempo real las mejores opciones de vuelos, hoteles y tours.',
    },
    {
      number: '03',
      title: 'Presentación de Itinerario',
      description: 'Se genera y presenta una propuesta de viaje completa y personalizada para la aprobación del cliente.',
    },
    {
      number: '04',
      title: 'Booking Automatizado',
      description: 'Una vez aprobado, el colaborador realiza todas las reservas y confirmaciones de forma instantánea y sin errores.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-cyan-500 font-semibold uppercase tracking-wider">Proceso Simplificado</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-12">De la Petición a la Reserva en 4 Pasos</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-4 gap-10 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg">
                 <div className="relative mb-4 inline-block">
                    <span className="flex items-center justify-center h-16 w-16 bg-cyan-500 text-white font-bold text-2xl rounded-full border-4 border-white shadow-md">{step.number}</span>
                 </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;