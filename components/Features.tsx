
import React from 'react';
import { PlaneIcon, HotelIcon, CompassIcon, ClockIcon, SparklesIcon, GlobeAltIcon } from './icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 text-cyan-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <PlaneIcon className="h-6 w-6" />,
      title: 'Booking Integral de Vuelos',
      description: 'Busca, compara y reserva las mejores opciones de vuelos, gestionando conexiones y preferencias de aerolíneas automáticamente.'
    },
    {
      icon: <HotelIcon className="h-6 w-6" />,
      title: 'Reservas de Alojamiento',
      description: 'Encuentra y asegura el hotel perfecto según el presupuesto, ubicación y amenidades deseadas por el cliente.'
    },
    {
      icon: <CompassIcon className="h-6 w-6" />,
      title: 'Coordinación de Excursiones',
      description: 'Organiza tours, actividades y experiencias locales, creando itinerarios completos y atractivos para el viajero.'
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: 'Disponibilidad 24/7',
      description: 'Atiende solicitudes y realiza gestiones a cualquier hora del día, los 365 días del año, sin interrupciones.'
    },
    {
      icon: <SparklesIcon className="h-6 w-6" />,
      title: 'Itinerarios Personalizados',
      description: 'Crea viajes a medida en segundos, combinando todos los elementos según los intereses y el perfil de cada cliente.'
    },
    {
      icon: <GlobeAltIcon className="h-6 w-6" />,
      title: 'Soporte Multilingüe',
      description: 'Comunícate con clientes y proveedores de todo el mundo en su idioma nativo, rompiendo barreras lingüísticas.'
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-cyan-500 font-semibold uppercase tracking-wider">Capacidades Clave</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Un Colaborador de Viajes Todoterreno</h2>
          <p className="text-lg text-slate-600 mb-12">
            Automatice cada paso del proceso de reserva con una inteligencia artificial diseñada específicamente para el turismo receptivo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;