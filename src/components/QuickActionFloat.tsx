import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Calendar, Sparkles } from 'lucide-react';

interface QuickActionFloatProps {
  onOpenContact: (tab?: string) => void;
  onOpenQuiz: () => void;
}

export const QuickActionFloat: React.FC<QuickActionFloatProps> = ({ onOpenContact, onOpenQuiz }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2.5 pointer-events-auto">
      
      {/* Botón Flotante: Orientador Preventivo */}
      <button
        onClick={onOpenQuiz}
        className="hidden md:flex items-center space-x-2 px-3.5 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg hover:shadow-xl transition-all scale-100 hover:scale-105 cursor-pointer"
        aria-label="Orientador Preventivo"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Orientador Preventivo</span>
      </button>

      {/* Botón Flotante: Citas */}
      <button
        onClick={() => onOpenContact('paciente')}
        className="hidden md:flex items-center space-x-2 px-3.5 py-2 rounded-full bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all scale-100 hover:scale-105 cursor-pointer"
        aria-label="Agendar Cita"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Agendar Cita</span>
      </button>

      {/* Botón Flotante: WhatsApp */}
      <a
        href="https://wa.me/584120000000?text=Hola%20NIVAL%20Sciences,%20quisiera%20información%20sobre%20sus%20servicios%20de%20laboratorio%20y%20prevención"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all scale-100 hover:scale-105 group"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-5 h-5 text-white animate-bounce" />
        <span className="text-xs font-bold hidden sm:inline">WhatsApp NIVAL</span>
      </a>

      {/* Botón Flotante: Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-lg border border-slate-700/80 transition-all hover:scale-110 cursor-pointer"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-4 h-4 text-amber-400" />
        </button>
      )}

    </div>
  );
};
