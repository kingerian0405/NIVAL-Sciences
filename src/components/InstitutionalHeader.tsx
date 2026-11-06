import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { CAPAS } from '../layers/layerData';

interface InstitutionalHeaderProps {
  activeCapaId: string;
  onSelectCapa: (id: string) => void;
}

export const InstitutionalHeader: React.FC<InstitutionalHeaderProps> = ({
  activeCapaId,
  onSelectCapa,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onSelectCapa(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200">
      {/* Barra superior de proyección institucional */}
      <div className="bg-slate-900 text-slate-350 text-[11px] py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-amber-400">NIVAL Sciences</span>
            <span className="text-slate-500">•</span>
            <span className="italic text-slate-200">“La visión que necesitas para vivir como sueñas”</span>
          </div>
          <div className="text-slate-400 tracking-wider text-[10px] uppercase font-semibold">
            Ciencia · Salud · Conocimiento · Innovación
          </div>
        </div>
      </div>

      {/* Identidad de marca y navegación principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3.5">
          
          {/* Logotipo Oficial NIVAL SCIENCES */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center space-x-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo-nival-official.jpg`} 
              alt="NIVAL Sciences" 
              className="h-12 sm:h-14 w-auto object-contain rounded-md"
            />
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
              <span className="text-xs font-bold text-slate-900 tracking-tight">
                Ecosistema Integral de Salud
              </span>
              <span className="text-[11px] text-amber-700 italic font-medium">
                “La visión que necesitas para vivir como sueñas”
              </span>
            </div>
          </button>

          {/* Menú de navegación en desktop (Las 9 Capas Estratégicas) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 overflow-x-auto py-1">
            {CAPAS.map((capa) => {
              const isActive = activeCapaId === capa.id;
              return (
                <button
                  key={capa.id}
                  onClick={() => handleNavClick(capa.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {capa.shortTitle}
                </button>
              );
            })}
          </nav>

          {/* Botón de menú móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Menú institucional"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Sub-barra informativa de la capa activa */}
      <div className="bg-slate-50 border-t border-slate-200/80 px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-600">
            <span className="font-mono text-slate-400 font-semibold">Capa {CAPAS.find(c => c.id === activeCapaId)?.number}</span>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-slate-900">{CAPAS.find(c => c.id === activeCapaId)?.title}</span>
          </div>
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            {CAPAS.find(c => c.id === activeCapaId)?.subtitle}
          </span>
        </div>
      </div>

      {/* Desplegable móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-2">
            Capas del Ecosistema NIVAL
          </div>
          {CAPAS.map((capa) => {
            const isActive = activeCapaId === capa.id;
            return (
              <button
                key={capa.id}
                onClick={() => handleNavClick(capa.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={`font-mono text-[10px] ${isActive ? 'text-amber-400' : 'text-slate-400'}`}>
                    {capa.number}
                  </span>
                  <span>{capa.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

