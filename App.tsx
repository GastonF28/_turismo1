import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// --- DemoFormModal Component ---
interface DemoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoFormModal: React.FC<DemoFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);


  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) {
        alert('Por favor, complete los campos obligatorios: Nombre, Empresa y Email.');
        return;
    }
    
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
        const response = await fetch('https://formspree.io/f/meoplvqg', { // <-- IMPORTANTE: REEMPLAZA ESTO CON TU URL DE FORMSPREE
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setSubmissionStatus({ success: true, message: '¡Gracias! Su solicitud ha sido enviada.' });
            setFormData({ name: '', company: '', email: '', message: '' }); // Reset form
            setTimeout(() => {
                onClose();
                setSubmissionStatus(null); // Reset status after closing
            }, 2000);
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        setSubmissionStatus({ success: false, message: 'Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo.' });
    } finally {
        setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-slate-900 bg-opacity-60 z-50 flex justify-center items-center transition-opacity duration-300" 
      onClick={onClose}
      aria-modal="true" 
      role="dialog"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-lg w-full m-4 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale" 
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Solicitar una Demo</h2>
            <p className="text-slate-500 mt-1">Hablemos de cómo podemos ayudar a su negocio.</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-800 transition-colors p-1 rounded-full -mt-1 -mr-1"
            aria-label="Cerrar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
           <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
           <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email de Contacto</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje (Opcional)</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"></textarea>
          </div>
          <div className="pt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 disabled:bg-cyan-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          </div>
          {submissionStatus && (
            <div className={`mt-4 text-center text-sm ${submissionStatus.success ? 'text-green-600' : 'text-red-600'}`}>
              {submissionStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};


// --- Main App Component ---
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-slate-50 text-slate-800 antialiased">
      <Header onDemoClick={openModal} />
      <main>
        <Hero onDemoClick={openModal} />
        <Features />
        <HowItWorks />
        <Benefits />
        <FinalCTA onDemoClick={openModal} />
      </main>
      <Footer />
      <DemoFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;