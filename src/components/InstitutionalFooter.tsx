import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { CAPAS } from '../layers/layerData';

interface InstitutionalFooterProps {
  onSelectCapa: (id: string) => void;
}

export const InstitutionalFooter: React.FC<InstitutionalFooterProps> = ({ onSelectCapa }) => {
  const handleNav = (id: string) => {
    onSelectCapa(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Declaración institucional de principios y responsabilidad (Sección 12) */}
      <div className="bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-850">
        <div className="max-w-6xl mx-auto flex items-start space-x-4">
          <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Principios de Actuación y Responsabilidad Institucional
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-5xl">
              El crecimiento de NIVAL Sciences se realiza respetando las competencias profesionales, las autorizaciones sanitarias, las normas de protección de datos y confidencialidad, y los requisitos aplicables a cada servicio. Las actividades clínicas, diagnósticas, formativas y de consultoría se ofrecen dentro del marco legal correspondiente, diferenciando claramente la información educativa, la asesoría y los actos profesionales regulados.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal del pie de página */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Columna Marca (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 bg-white p-2.5 rounded-xl w-fit">
              <img 
                src={`${import.meta.env.BASE_URL}logo-nival-official.jpg`} 
                alt="NIVAL Sciences" 
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-amber-400 text-sm font-semibold italic">
              “La visión que necesitas para vivir como sueñas”
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Ecosistema integral de salud, asesoría, prevención, formación e innovación. Documento base para orientar el desarrollo institucional, la presencia digital y la expansión de servicios.
            </p>

            <div className="pt-1 text-[11px] font-semibold text-slate-400 tracking-widest uppercase">
              Ciencia · Salud · Conocimiento · Innovación
            </div>
          </div>

          {/* Columna Navegación por Capas (7 cols) */}
          <div className="md:col-span-7">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Estructura Institucional (Las 9 Capas)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CAPAS.map((capa) => (
                <button
                  key={capa.id}
                  onClick={() => handleNav(capa.id)}
                  className="flex items-center space-x-2 text-left py-1 text-slate-300 hover:text-amber-400 transition-colors group cursor-pointer"
                >
                  <span className="font-mono text-slate-500 text-[11px] group-hover:text-amber-400">
                    {capa.number}
                  </span>
                  <span>{capa.title}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Separador inferior */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NIVAL Sciences. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-6">
            <span>Sede Central de Diagnóstico y Salud</span>
            <span>•</span>
            <button
              onClick={() => handleNav('contacto')}
              className="text-slate-400 hover:text-amber-400"
            >
              Canales Oficiales de Atención
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

