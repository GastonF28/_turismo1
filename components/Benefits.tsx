import React from 'react';
import { CurrencyDollarIcon, RocketIcon, HappyFaceIcon, UsersIcon } from './icons';

interface BenefitProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-500 rounded-full">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
            <p className="text-slate-600">{description}</p>
        </div>
    );
};

const Benefits: React.FC = () => {
    const benefitsData = [
        {
            icon: <CurrencyDollarIcon className="h-8 w-8" />,
            title: 'Reducción de Costos Operativos',
            description: 'Disminuya drásticamente los gastos asociados a personal, formación y errores manuales.'
        },
        {
            icon: <RocketIcon className="h-8 w-8" />,
            title: 'Eficiencia Exponencial',
            description: 'Procese un volumen de solicitudes mucho mayor en menos tiempo, aumentando su capacidad de venta.'
        },
        {
            icon: <HappyFaceIcon className="h-8 w-8" />,
            title: 'Experiencia de Cliente Superior',
            description: 'Ofrezca respuestas instantáneas y personalizadas que deleitan a sus clientes y fomentan la lealtad.'
        },
        {
            icon: <UsersIcon className="h-8 w-8" />,
            title: 'Escalabilidad Inmediata',
            description: 'Ajuste su capacidad operativa al instante para manejar picos de demanda sin contratar personal adicional.'
        }
    ];

    return (
        <section className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-cyan-500 font-semibold uppercase tracking-wider">Ventajas Competitivas</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Transforme su Rentabilidad y Operaciones</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Implementar un colaborador de IA no es solo una mejora tecnológica, es una decisión estratégica de negocio.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefitsData.map((benefit, index) => (
                        <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;