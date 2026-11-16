import React from 'react';
import { ShieldCheck, ArrowRight, Clock, MessageCircle } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Columna Marca (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 bg-white/95 p-2 rounded-xl border border-slate-400 w-fit">
              <img 
                src={`${import.meta.env.BASE_URL}Nival.jpeg`} 
                alt="NIVAL Sciences" 
                className="h-10 w-auto object-contain rounded-md"
              />
            </div>

            <p className="text-amber-400 text-sm font-semibold italic">
              “La visión que necesitas para vivir como sueñas”
            </p>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Ecosistema integral de salud, diagnóstico clínico, asesoría especializada, prevención y gestión del conocimiento.
            </p>

            <div className="pt-1 text-[11px] font-semibold text-slate-400 tracking-widest uppercase">
              Ciencia · Salud · Conocimiento · Innovación
            </div>
          </div>

          {/* Columna Navegación (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navegación Institucional
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {CAPAS.map((capa) => (
                <button
                  key={capa.id}
                  onClick={() => handleNav(capa.id)}
                  className="flex items-center space-x-2 text-left py-1 text-slate-300 hover:text-amber-400 transition-colors group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                  <span>{capa.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Columna Horarios y WhatsApp (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Horarios y Atención Oficial
            </h4>
            
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-slate-300">
                  <p className="text-white font-bold text-xs">Horario de Atención:</p>
                  <p><strong>Lunes a Viernes:</strong> 7:00 AM – 7:00 PM</p>
                  <p><strong>Sábados y Domingos:</strong> 7:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/584129058894?text=Hola%20NIVAL%20Sciences,%20quisiera%20solicitar%20información%20y%20atención"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +58 412 9058894</span>
            </a>
          </div>

        </div>

        {/* Separador inferior */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} NIVAL Sciences. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 sm:space-x-6">
            <span>Sede Central de Diagnóstico y Salud</span>
            <span className="hidden sm:inline">•</span>
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

