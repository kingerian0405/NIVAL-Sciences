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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      {/* Barra superior de proyección institucional */}
      <div className="bg-slate-900 text-slate-350 py-1 sm:py-1.5 px-3 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] sm:text-[11px]">
          <div className="flex items-center space-x-1.5 min-w-0">
            <span className="font-semibold text-amber-400 shrink-0">NIVAL Sciences</span>
            <span className="text-slate-500 shrink-0">•</span>
            <span className="italic text-slate-200 truncate">“La visión que necesitas para vivir como sueñas”</span>
          </div>
          <div className="hidden md:block text-slate-400 tracking-wider text-[10px] uppercase font-semibold shrink-0 ml-2">
            Ciencia · Salud · Conocimiento · Innovación
          </div>
        </div>
      </div>

      {/* Identidad de marca y navegación principal */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3">

          {/* Logotipo Oficial NIVAL SCIENCES */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center space-x-2 sm:space-x-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl border border-slate-200 shadow-2xs">
              <img
                src={`${import.meta.env.BASE_URL}Nival.jpeg`}
                alt="NIVAL Sciences"
                className="h-8 sm:h-12 w-auto object-contain rounded-md"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
              <span className="text-xs font-bold text-slate-950 tracking-tight">
                Ecosistema Integral de Salud
              </span>
              <span className="text-[11px] text-amber-800 italic font-semibold">
                “La visión que necesitas para vivir como sueñas”
              </span>
            </div>
          </button>

          {/* Menú de navegación en desktop */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 overflow-x-auto py-1">
            {CAPAS.map((capa) => {
              const isActive = activeCapaId === capa.id;
              return (
                <button
                  key={capa.id}
                  onClick={() => handleNavClick(capa.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer ${isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
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
              className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Menú institucional"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Desplegable móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 mb-2">
            Navegación
          </div>
          {CAPAS.map((capa) => {
            const isActive = activeCapaId === capa.id;
            return (
              <button
                key={capa.id}
                onClick={() => handleNavClick(capa.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-colors ${isActive
                    ? 'bg-slate-900 text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                <span>{capa.title}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

